---
name: "/clear"
introducedIn: "0.2.9"
description: "Fixed plan files persisting across `/clear` commands, now ensuring a fresh plan file is used after clearing a conversation"
category: slash
---

# /clear

Fixed plan files persisting across `/clear` commands, now ensuring a fresh plan file is used after clearing a conversation

## 関連リリース

### v2.1.111

- Fixed `/clear` dropping the session name set by `/rename`, causing statusline output to lose `session_name`
### v2.1.84

- Added idle-return prompt that nudges users returning after 75+ minutes to `/clear`, reducing unnecessary token re-caching on stale sessions
### v2.1.72

- Fixed backgrounded Ctrl+B queries losing their transcript or corrupting the new conversation after `/clear`
- Fixed `/clear` killing background agent/bash tasks — only foreground tasks are now cleared
### v2.1.69

- Fixed memory retention in in-process teammates where the parent's full conversation history was pinned for the teammate's lifetime, preventing GC after `/clear` or auto-compact
- Fixed `/clear` not fully clearing all session caches, reducing memory retention in long sessions
### v2.1.63

- Fixed `/clear` not resetting cached skills, which could cause stale skill content to persist in the new conversation
### v2.1.49

- Fixed `--resume` session picker showing raw XML tags for sessions that start with commands like `/clear`. Now correctly falls through to the session ID fallback.
### v2.1.47

- Fixed session name persisting in status bar after `/clear` command (anthropics/claude-code#26082)
### v2.1.3

- Fixed plan files persisting across `/clear` commands, now ensuring a fresh plan file is used after clearing a conversation
