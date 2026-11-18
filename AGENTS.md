# AGENTS.md

This file contains rules and facts specific to the `dsh-nvidia-cloud-provider` plugin.

## Product / Purpose

- **Project**: `dsh-nvidia-cloud-provider`
- **Package**: `@ai-workspace-lab/dsh-nvidia-cloud-provider`
- **Repository**: `https://github.com/ai-workspace-lab/dsh-nvidia-cloud-provider`
- **Purpose**: LLM provider plugin for DeepSeek Harness integrating NVIDIA NIM (`build.nvidia.com` / `integrate.api.nvidia.com/v1`) with OpenAI-compatible streaming, dynamic model catalog discovery, multi-key rotation, cooldowns, and request analytics.
- **Target Users**: DeepSeek Harness users (Web and Desktop).
- **Status**: active

## Package Policy (DSH Plugin)
- Public plugin under `@ai-workspace-lab/dsh-nvidia-cloud-provider` with strict namespace isolation (`/dsh-nvidia/*`, `llm-nvidia-nim`, `nvidia-nim`, `storages/dsh-nvidia`) to coexist cleanly alongside `@goodandready/dsh-ollama-cloud-provider`.
- Host packages `@deepseek-ai/*` are declared strictly in `peerDependencies`.
- Release `.tgz` artifacts are never committed or left in source root — only generated in `dist/` or `/tmp`.

## Project Index (`index.md`)
- Architecture, build/test/release commands, and entry points are documented in `index.md`.

## Essential Files
- `docs/design/DESIGN.md` — UI and contract design reference.
- `docs/deployment/DEPLOYMENT.md` — build and deployment rules.
- `deploy.sh` — standard verification and install runner.
- `scripts/pack-check.mjs` — automatic guard for file size limits (<256 KiB) and stray `.tgz` files.

## Codebase Rules
- No empty `.catch(() => {})`: use `bestEffortFailed(label, err)` with logging.
- Server library is built with `unbundle: true` to preserve domain modularity.
- Write routes require same-origin verification and loopback socket checks.
