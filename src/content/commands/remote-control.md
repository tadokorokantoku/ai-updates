---
name: "/remote-control"
introducedIn: "2.1.69"
description: "Added optional name argument to `/remote-control` and `claude remote-control` (`/remote-control My Project` or `--name \"My Project\"`) to set a custom session title visible in claude.ai/code"
category: slash
---

# /remote-control

Added optional name argument to `/remote-control` and `claude remote-control` (`/remote-control My Project` or `--name "My Project"`) to set a custom session title visible in claude.ai/code

## 関連リリース

### v2.1.101

- Fixed several Remote Control issues: worktrees removed on session crash, connection failures not persisting in the transcript, spurious "Disconnected" indicator in brief mode for local sessions, and `/remote-control` failing over SSH when only `CLAUDE_CODE_ORGANIZATION_UUID` is set
### v2.1.80

- Fixed `/remote-control` appearing for gateway and third-party provider deployments where it cannot function
### v2.1.79

- [VSCode] Added `/remote-control` — bridge your session to claude.ai/code to continue from a browser or phone
### v2.1.69

- Added optional name argument to `/remote-control` and `claude remote-control` (`/remote-control My Project` or `--name "My Project"`) to set a custom session title visible in claude.ai/code
