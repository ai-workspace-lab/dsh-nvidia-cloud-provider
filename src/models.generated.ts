// Generated for NVIDIA NIM provider from https://integrate.api.nvidia.com/v1/models
// Do not edit by hand.

export type NvidiaCloudTransport = 'native' | 'openai-chat'

export interface ModelCost {
  readonly input: number
  readonly output: number
  readonly cacheRead: number
  readonly offPeakInput?: number
  readonly offPeakOutput?: number
  readonly offPeakCacheRead?: number
}

export interface NvidiaCloudModelMeta {
  readonly id: string
  readonly name: string
  readonly transport: NvidiaCloudTransport
  readonly contextWindow: number
  readonly maxTokens: number
  readonly input: readonly ('text' | 'image')[]
  readonly reasoning: readonly string[]
  readonly reasoningToggle: boolean
  readonly tools: boolean
  readonly free: boolean
  readonly available: boolean
  readonly defaultReasoning?: string
  readonly cost: ModelCost
}

export type OllamaCloudModelMeta = NvidiaCloudModelMeta

export const GENERATED_MODELS: Record<string, NvidiaCloudModelMeta> = {
  "bigcode/starcoder2-15b": {
    "id": "bigcode/starcoder2-15b",
    "name": "bigcode/starcoder2-15b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "google/gemma-3-12b-it": {
    "id": "google/gemma-3-12b-it",
    "name": "google/gemma-3-12b-it",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "google/gemma-3-4b-it": {
    "id": "google/gemma-3-4b-it",
    "name": "google/gemma-3-4b-it",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "google/gemma-4-31b-it": {
    "id": "google/gemma-4-31b-it",
    "name": "google/gemma-4-31b-it",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "meta/muse-glimmer-30b": {
    "id": "meta/muse-glimmer-30b",
    "name": "meta/muse-glimmer-30b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "minimaxai/minimax-m3.1-flash": {
    "id": "minimaxai/minimax-m3.1-flash",
    "name": "minimaxai/minimax-m3.1-flash",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "mistralai/mistral-large-4-1t-a52b": {
    "id": "mistralai/mistral-large-4-1t-a52b",
    "name": "mistralai/mistral-large-4-1t-a52b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/ai-synthetic-video-detector": {
    "id": "nvidia/ai-synthetic-video-detector",
    "name": "nvidia/ai-synthetic-video-detector",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/cosmos-reason2-8b": {
    "id": "nvidia/cosmos-reason2-8b",
    "name": "nvidia/cosmos-reason2-8b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [
      "low",
      "medium",
      "high"
    ],
    "reasoningToggle": true,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/embed-qa-4": {
    "id": "nvidia/embed-qa-4",
    "name": "nvidia/embed-qa-4",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/ising-calibration-1.5-31b": {
    "id": "nvidia/ising-calibration-1.5-31b",
    "name": "nvidia/ising-calibration-1.5-31b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/llama-3.1-nemoguard-8b-topic-control": {
    "id": "nvidia/llama-3.1-nemoguard-8b-topic-control",
    "name": "nvidia/llama-3.1-nemoguard-8b-topic-control",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/llama-3.1-nemotron-safety-guard-8b-v3": {
    "id": "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
    "name": "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/llama-3.2-nemoretriever-1b-vlm-embed-v1": {
    "id": "nvidia/llama-3.2-nemoretriever-1b-vlm-embed-v1",
    "name": "nvidia/llama-3.2-nemoretriever-1b-vlm-embed-v1",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text",
      "image"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/llama-3.2-nv-embedqa-1b-v1": {
    "id": "nvidia/llama-3.2-nv-embedqa-1b-v1",
    "name": "nvidia/llama-3.2-nv-embedqa-1b-v1",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3-embed-1b": {
    "id": "nvidia/nemotron-3-embed-1b",
    "name": "nvidia/nemotron-3-embed-1b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning": {
    "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    "name": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [
      "low",
      "medium",
      "high"
    ],
    "reasoningToggle": true,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3-ultra-550b-a55b": {
    "id": "nvidia/nemotron-3-ultra-550b-a55b",
    "name": "nvidia/nemotron-3-ultra-550b-a55b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3.5-bolt-e4b": {
    "id": "nvidia/nemotron-3.5-bolt-e4b",
    "name": "nvidia/nemotron-3.5-bolt-e4b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3.5-content-safety": {
    "id": "nvidia/nemotron-3.5-content-safety",
    "name": "nvidia/nemotron-3.5-content-safety",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3.5-embed-1b": {
    "id": "nvidia/nemotron-3.5-embed-1b",
    "name": "nvidia/nemotron-3.5-embed-1b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3.5-embed-8b": {
    "id": "nvidia/nemotron-3.5-embed-8b",
    "name": "nvidia/nemotron-3.5-embed-8b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3.5-lightning-30b-a3b": {
    "id": "nvidia/nemotron-3.5-lightning-30b-a3b",
    "name": "nvidia/nemotron-3.5-lightning-30b-a3b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nemotron-3.5-super-vl-120b-a12b": {
    "id": "nvidia/nemotron-3.5-super-vl-120b-a12b",
    "name": "nvidia/nemotron-3.5-super-vl-120b-a12b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text",
      "image"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nv-embedqa-mistral-7b-v2": {
    "id": "nvidia/nv-embedqa-mistral-7b-v2",
    "name": "nvidia/nv-embedqa-mistral-7b-v2",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/nvclip": {
    "id": "nvidia/nvclip",
    "name": "nvidia/nvclip",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text",
      "image"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "nvidia/riva-translate-4b-instruct-v2": {
    "id": "nvidia/riva-translate-4b-instruct-v2",
    "name": "nvidia/riva-translate-4b-instruct-v2",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "openai/gpt-oss-20b": {
    "id": "openai/gpt-oss-20b",
    "name": "openai/gpt-oss-20b",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "poolside/laguna-xs-2.1": {
    "id": "poolside/laguna-xs-2.1",
    "name": "poolside/laguna-xs-2.1",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "snowflake/arctic-embed-l": {
    "id": "snowflake/arctic-embed-l",
    "name": "snowflake/arctic-embed-l",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": false,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "stepfun-ai/step-5-preview": {
    "id": "stepfun-ai/step-5-preview",
    "name": "stepfun-ai/step-5-preview",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "z-ai/glm-5.3-flash": {
    "id": "z-ai/glm-5.3-flash",
    "name": "z-ai/glm-5.3-flash",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 16384,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "gpt-oss:120b": {
    "id": "gpt-oss:120b",
    "name": "gpt-oss:120b",
    "transport": "native",
    "contextWindow": 131072,
    "maxTokens": 32768,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": false,
    "available": true,
    "cost": {
      "input": 0.15,
      "output": 0.6,
      "cacheRead": 0.003
    }
  },
  "gpt-oss": {
    "id": "gpt-oss:120b",
    "name": "gpt-oss:120b",
    "transport": "native",
    "contextWindow": 131072,
    "maxTokens": 32768,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": false,
    "available": true,
    "cost": {
      "input": 0.15,
      "output": 0.6,
      "cacheRead": 0.003
    }
  },
  "beam": {
    "id": "beam",
    "name": "beam",
    "transport": "openai-chat",
    "contextWindow": 131072,
    "maxTokens": 32768,
    "input": [
      "text"
    ],
    "reasoning": [],
    "reasoningToggle": false,
    "tools": true,
    "free": true,
    "available": true,
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0
    }
  },
  "deepseek-v4.1-flash": {
    "id": "deepseek-v4.1-flash",
    "name": "deepseek-v4.1-flash",
    "transport": "openai-chat",
    "contextWindow": 1048576,
    "maxTokens": 32768,
    "input": [
      "text",
      "image"
    ],
    "reasoning": [
      "low",
      "medium",
      "high"
    ],
    "reasoningToggle": true,
    "tools": true,
    "free": false,
    "available": true,
    "cost": {
      "input": 0.3,
      "output": 1.2,
      "cacheRead": 0.006,
      "offPeakInput": 0.15,
      "offPeakOutput": 0.6,
      "offPeakCacheRead": 0.003
    }
  },
  "deepseek-v4-pro:0813": {
    "id": "deepseek-v4-pro:0813",
    "name": "deepseek-v4-pro:0813",
    "transport": "openai-chat",
    "contextWindow": 1048576,
    "maxTokens": 32768,
    "input": [
      "text"
    ],
    "reasoning": [
      "low",
      "medium",
      "high"
    ],
    "reasoningToggle": true,
    "tools": true,
    "free": false,
    "available": true,
    "cost": {
      "input": 1.32,
      "output": 3.96,
      "cacheRead": 0.044,
      "offPeakInput": 0.66,
      "offPeakOutput": 1.98,
      "offPeakCacheRead": 0.022
    }
  }
}
