---
name: "/model"
introducedIn: "1.0.77"
description: "Opus Plan Mode: New setting in `/model` to run Opus only in plan mode, Sonnet otherwise"
category: slash
---

# /model

Opus Plan Mode: New setting in `/model` to run Opus only in plan mode, Sonnet otherwise

## 関連リリース

### v2.1.108

- Improved `/model` to warn before switching models mid-conversation, since the next response re-reads the full history uncached
### v2.1.105

- Fixed `/model` picker on AWS Bedrock in non-US regions persisting invalid `us.*` model IDs to `settings.json` when inference profile discovery is still in-flight
### v2.1.90

- Fixed headers disappearing when scrolling `/model`, `/config`, and other selection screens
### v2.1.86

- Fixed statusline showing another session's model when running multiple Claude Code instances and using `/model` in one of them
### v2.1.84

- Added `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` env vars to override effort/thinking capability detection for pinned default models for 3p (Bedrock, Vertex, Foundry), and `_MODEL_NAME`/`_DESCRIPTION` to customize the `/model` picker label
### v2.1.78

- Added `ANTHROPIC_CUSTOM_MODEL_OPTION` env var to add a custom entry to the `/model` picker, with optional `_NAME` and `_DESCRIPTION` suffixed vars for display
### v2.1.75

- Fixed the Claude Code header not updating the displayed model name after switching models with `/model` or Option+P
### v2.1.73

- Improved `/effort` to work while Claude is responding, matching `/model` behavior
### v2.1.72

- Fixed `/model` not displaying results when run while Claude is working
### v2.1.68

- Opus 4.6 now defaults to medium effort for Max and Team subscribers. Medium effort works well for most tasks — it's the sweet spot between speed and thoroughness. You can change this anytime with `/model`
### v2.1.63

- Improved `/model` command to show the currently active model in the slash command menu
### v2.1.51

- The `/model` picker now shows human-readable labels (e.g., "Sonnet 4.5") instead of raw model IDs for pinned model versions, with an upgrade hint when a newer version is available.
### v2.1.47

- Fixed built-in slash commands (`/help`, `/model`, `/compact`, etc.) being hidden from the autocomplete dropdown when many user skills are installed (anthropics/claude-code#22020)
### v2.1.30

- Changed `/model` to execute immediately instead of being queued
### v2.1.14

- Fixed an issue where `/config`, `/context`, `/model`, and `/todos` command overlays could close unexpectedly
### v2.1.7

- Fixed spinner briefly flashing when running local slash commands like `/model` or `/theme`
### v2.0.12

- Avoid flickering in `/model` selector
### v1.0.77

- Opus Plan Mode: New setting in `/model` to run Opus only in plan mode, Sonnet otherwise
