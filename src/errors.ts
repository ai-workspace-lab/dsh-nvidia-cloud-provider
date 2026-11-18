import { CONTEXT_WINDOW_EXCEEDED_CODE, LlmError, isContextWindowExceededError } from '@deepseek-ai/dsh-llm'

import { redactText } from './sanitize.ts'

interface ProviderErrorBody {
  message?: string
  type?: string
}

function parseErrorBody(text: string): ProviderErrorBody {
  try {
    const body = JSON.parse(text) as unknown
    if (typeof body !== 'object' || body === null) return {}
    const outer = body as Record<string, unknown>
    const nested = outer.error
    if (typeof nested === 'string') return { message: nested }
    if (typeof nested === 'object' && nested !== null && !Array.isArray(nested)) {
      const error = nested as Record<string, unknown>
      return {
        ...(typeof error.type === 'string' ? { type: error.type } : {}),
        ...(typeof error.message === 'string' ? { message: error.message } : {}),
      }
    }
    return {
      ...(typeof outer.type === 'string' ? { type: outer.type } : {}),
      ...(typeof outer.message === 'string' ? { message: outer.message } : {}),
    }
  } catch {
    return {}
  }
}

export function retryAfterMs(headers: Headers): number | undefined {
  const reset = headers.get('x-ratelimit-reset')
    ?? headers.get('x-ratelimit-reset-requests')
    ?? headers.get('x-ratelimit-reset-tokens')
  if (reset !== null && reset.trim() !== '') {
    const seconds = Number(reset)
    if (Number.isFinite(seconds) && seconds >= 0) {
      // If it looks like epoch seconds (e.g. > 1_000_000_000), calculate delta
      if (seconds > 1_000_000_000) {
        return Math.max(0, Math.trunc(seconds * 1000 - Date.now()))
      }
      return Math.trunc(seconds * 1000)
    }
    const at = Date.parse(reset)
    if (Number.isFinite(at)) return Math.max(0, at - Date.now())
  }
  const raw = headers.get('retry-after')
  if (raw === null || raw.trim() === '') return undefined
  const seconds = Number(raw)
  if (Number.isFinite(seconds) && seconds >= 0) return Math.trunc(seconds * 1000)
  const at = Date.parse(raw)
  return Number.isFinite(at) ? Math.max(0, at - Date.now()) : undefined
}

function isQuotaText(detail: string): boolean {
  return /\bquota\b/.test(detail)
    || detail.includes('usage limit')
    || detail.includes('usage_limit')
    || detail.includes('limit reached')
    || detail.includes('insufficient credit')
    || detail.includes('insufficient balance')
    || detail.includes('insufficient funds')
    || detail.includes('credit balance')
    || detail.includes('out of credit')
    || detail.includes('payment required')
    || detail.includes('allowance')
}

/**
 * Translate an NVIDIA NIM HTTP failure into the harness failure taxonomy.
 * Ollama reports everything as `{"error": "..."}`, so both the status and the
 * message matter.
 */
export function classifyResponseError(status: number, text: string, headers: Headers): LlmError {
  const body = parseErrorBody(text)
  const message = redactText(body.message ?? (text.trim() === '' ? `HTTP ${status}` : text.trim().slice(0, 500)))
  const detail = `${body.type ?? ''} ${message}`.toLowerCase()
  const retry = retryAfterMs(headers)
  const options = { status, ...(retry === undefined ? {} : { providerRetryAfterMs: retry }) }
  const quota = isQuotaText(detail)

  if (status === 402 || (quota && status !== 401)) {
    return new LlmError(`NVIDIA NIM quota is exhausted: ${message}`, 'QUOTA', options)
  }
  if (status === 401 || status === 403) {
    return new LlmError(
      `NVIDIA NIM rejected the credential: ${message}. Create a key at`
      + ' https://ollama.com/settings/keys and store it through the credentials service.',
      'INVALID_CREDENTIAL',
      options,
    )
  }
  if (status === 404) {
    return new LlmError(
      `NVIDIA NIM does not serve this model: ${message}. Refresh the catalog and`
      + ' check that the id matches the cloud list exactly.',
      'UNSUPPORTED_MODEL',
      options,
    )
  }
  if (status === 429) {
    return new LlmError(`NVIDIA NIM rate-limited the request: ${message}`, 'RATE_LIMIT', options)
  }
  if (isContextWindowExceededError(detail)) {
    return new LlmError(
      `NVIDIA NIM rejected the request: context window exceeded: ${message}`,
      CONTEXT_WINDOW_EXCEEDED_CODE,
      options,
    )
  }
  if (/does not support (?:images?|vision|tools?)|unsupported (?:image|tool)|image (?:input|modality) is not supported|tools? (?:are|is) not supported/i.test(detail)) {
    return new LlmError(
      `NVIDIA NIM model does not accept this request: ${message}`,
      'UNSUPPORTED_MODEL',
      options,
    )
  }
  if (/request (?:body|entity) too large|payload too large|node count cannot exceed|maximum (?:request|body) size/i.test(detail)) {
    return new LlmError(
      `NVIDIA NIM rejected the request body as too large: ${message}`,
      'PROVIDER_HTTP_ERROR',
      options,
    )
  }
  if (status === 408 || status === 504) {
    return new LlmError(`NVIDIA NIM timed out (HTTP ${status}): ${message}`, 'TIMEOUT', options)
  }
  if (status === 503) {
    return new LlmError(
      `NVIDIA NIM is at its concurrency limit or temporarily unavailable: ${message}`,
      'SERVER',
      options,
    )
  }
  if (status >= 500) {
    return new LlmError(`NVIDIA NIM gateway error (HTTP ${status}): ${message}`, 'SERVER', options)
  }
  return new LlmError(`NVIDIA NIM request failed (HTTP ${status}): ${message}`, 'PROVIDER_HTTP_ERROR', options)
}

/** Parse an in-band error object, when a stream reports one. */
export function classifyStreamError(value: unknown, status = 200): LlmError | undefined {
  if (typeof value !== 'object' || value === null) return undefined
  const record = value as Record<string, unknown>
  if (record.error === undefined) return undefined
  return classifyResponseError(status, JSON.stringify(value), new Headers())
}
