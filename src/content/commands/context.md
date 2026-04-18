---
name: "/context"
introducedIn: "2.0.30"
description: "Fixed a bug where `/context` would sometimes fail with \"max_tokens must be greater than thinking.budget_tokens\" error message"
category: slash
---

# /context

Fixed a bug where `/context` would sometimes fail with "max_tokens must be greater than thinking.budget_tokens" error message

## 関連リリース

### v2.1.111

- Fixed `/context` grid rendering with extra blank lines between rows
### v2.1.110

- `/context`, `/exit`, and `/reload-plugins` now work from Remote Control (mobile/web) clients
### v2.1.101

- Fixed `/context` Free space and Messages breakdown disagreeing with the header percentage
### v2.1.74

- Added actionable suggestions to `/context` command — identifies context-heavy tools, memory bloat, and capacity warnings with specific optimization tips
### v2.1.69

- Fixed `/context` showing identical token counts for all MCP tools from a server
### v2.1.20

- Fixed duplicate output in some commands like `/context`
### v2.1.14

- Fixed `/context` command to show the same token count and percentage as the status line in verbose mode
- Fixed an issue where `/config`, `/context`, `/model`, and `/todos` command overlays could close unexpectedly
- Fixed slash command autocomplete selecting wrong command when typing similar commands (e.g., `/context` vs `/compact`)
### v2.1.0

- Fixed skill token estimates in `/context` to accurately reflect frontmatter-only loading
### v2.0.74

- Improved `/context` command visualization with grouped skills and agents by source, slash commands, and sorted token count
### v2.0.72

- Fixed `/context` command not respecting custom system prompts in non-interactive mode
### v2.0.30

- Fixed a bug where `/context` would sometimes fail with "max_tokens must be greater than thinking.budget_tokens" error message
