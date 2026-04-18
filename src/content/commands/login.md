---
name: "/login"
introducedIn: "2.1.30"
description: "Fixed 400 errors that could occur after running `/login` when the conversation contained thinking blocks"
category: slash
---

# /login

Fixed 400 errors that could occur after running `/login` when the conversation contained thinking blocks

## 関連リリース

### v2.1.108

- Fixed paste not working in the `/login` code prompt (regression in 2.1.105)
### v2.1.101

- Fixed `/login` OAuth URL rendering with padding that prevented clean mouse selection
### v2.1.69

- Fixed macOS keychain corruption when using multiple OAuth MCP servers. Large OAuth metadata blobs could overflow the `security -i` stdin buffer, silently leaving stale credentials behind and causing repeated `/login` prompts.
### v2.1.30

- Fixed 400 errors that could occur after running `/login` when the conversation contained thinking blocks
