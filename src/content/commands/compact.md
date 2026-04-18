---
name: "/compact"
introducedIn: "2.0.31"
description: "Fixed issue causing `/compact` to fail with `prompt_too_long` by making it respect existing compact boundaries"
category: slash
---

# /compact

Fixed issue causing `/compact` to fail with `prompt_too_long` by making it respect existing compact boundaries

## 関連リリース

### v2.1.98

- Dropped `/compact` hints when `DISABLE_COMPACT` is set.
### v2.1.85

- Fixed `/compact` failing with "context exceeded" when the conversation has grown too large for the compact request itself to fit
### v2.1.69

- Fixed `/compact` summary rendering as a user bubble in SDK consumers (Claude Code Remote web UI, VSCode extension)
### v2.1.47

- Fixed built-in slash commands (`/help`, `/model`, `/compact`, etc.) being hidden from the autocomplete dropdown when many user skills are installed (anthropics/claude-code#22020)
### v2.1.16

- Fixed an issue where the "context remaining" warning was not hidden after running `/compact`
### v2.1.15

- Fixed the "Context left until auto-compact" warning not disappearing after running `/compact`
### v2.1.14

- Fixed slash command autocomplete selecting wrong command when typing similar commands (e.g., `/context` vs `/compact`)
### v2.0.31

- Fixed issue causing `/compact` to fail with `prompt_too_long` by making it respect existing compact boundaries
