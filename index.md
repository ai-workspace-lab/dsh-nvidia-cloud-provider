# index.md — @ai-workspace-lab/dsh-nvidia-cloud-provider

Quick navigation map for developers and agents.

## Purpose & Status
- **Purpose**: Cordis LLM provider plugin connecting DeepSeek Harness to NVIDIA NIM (`https://integrate.api.nvidia.com/v1`).
- **Package**: `@ai-workspace-lab/dsh-nvidia-cloud-provider` (MIT License).
- **Status**: `active` (`0.1.39`).

## Entry Points & Routes
- Server entry: `src/index.ts` -> compiled to `lib/index.js` (unbundled ESM).
- Client entry: `src/client/index.tsx` -> compiled to `lib/client.js` (CJS bundle for DSH `window.__ModuleLoader__`).
- API routes: `src/routes.ts` (`/dsh-nvidia/health`, `/status`, `/state`, `/config`, `/update`, `/cooldowns/reset`, `/test`, `/refresh`, `/models/discover`).

## Core Components
- `src/adapter.ts`: `LlmAdapter` implementation with multi-account rotation, cooldowns, and streaming.
- `src/transports/`:
  - `openai-chat.ts`: Primary OpenAI-compatible transport `/v1/chat/completions` (SSE).
  - `native.ts`: Native transport fallback `/api/chat` (NDJSON).
  - `tool-call-id.ts`: Unique tool call ID generation (`call_${uuid}`).
- `src/catalog.ts`: Dynamic catalog discovery, caching, and non-chat model filtering (`isGenerativeChatModel`).
- `src/usage.ts`: Usage/balance reader with fail-open handling for inference-only gateways.
- `src/client/`: React settings page, provider card, sidebar quota card, and updater components.

## Verified npm Scripts
1. `npm run build` — build via `tsdown` (`lib/` with `unbundle: true` and `lib/client.js`).
2. `npm run prepare` — pre-pack build (`tsdown 1>&2`).
3. `npm run typecheck` — TypeScript check via `tsc --noEmit`.
4. `npm test` — run all 38 test files (175 tests) via `node --import tsx --test`.
5. `npm run pack:check` — verify no stray `*.tgz` in root and every packed file is under 256 KiB.
6. `npm run check` — full gate: `typecheck && test && build && pack:check`.
7. `npm run release` — run `check` and build `.tgz` tarball into `dist/`.
8. `npm run sync:models` — synchronize static fallback catalog metadata.
