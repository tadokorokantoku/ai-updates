---
name: "/rename"
introducedIn: "2.0.64"
description: "Added named session support: use `/rename` to name sessions, `/resume <name>` in REPL or `claude --resume <name>` from the terminal to resume them"
category: slash
---

# /rename

Added named session support: use `/rename` to name sessions, `/resume <name>` in REPL or `claude --resume <name>` from the terminal to resume them

## 関連リリース

### v2.1.111

- Fixed `/clear` dropping the session name set by `/rename`, causing statusline output to lose `session_name`
### v2.1.110

- Fixed `--resume` sometimes showing the first prompt instead of the `/rename` name for sessions still running or exited uncleanly
### v2.1.108

- Fixed `claude --resume <session-id>` losing the session's custom name and color set via `/rename`
### v2.1.101

- Improved `claude -p --resume <name>` to accept session titles set via `/rename` or `--name`
### v2.1.81

- Fixed `/rename` not syncing the title for Remote Control sessions
### v2.1.75

- Added session name display on the prompt bar when using `/rename`
### v2.1.70

- Improved `/rename` to work while Claude is processing, instead of being silently queued
### v2.1.47

- Fixed custom session titles set via `/rename` being lost after resuming a conversation (anthropics/claude-code#23610)
- The `/rename` command now updates the terminal tab title by default (anthropics/claude-code#25789)
### v2.1.41

- Improved `/rename` to auto-generate session name from conversation context when called without arguments
### v2.1.19

- Fixed `/rename` and `/tag` not updating the correct session when resuming from a different directory (e.g., git worktrees)
### v2.0.64

- Added named session support: use `/rename` to name sessions, `/resume <name>` in REPL or `claude --resume <name>` from the terminal to resume them
