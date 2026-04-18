---
name: "/feedback"
introducedIn: "2.1.14"
description: "Fixed `/feedback` command generating invalid GitHub issue URLs when description is very long"
category: slash
---

# /feedback

Fixed `/feedback` command generating invalid GitHub issue URLs when description is very long

## 関連リリース

### v2.1.108

- Fixed `/feedback` retry: pressing Enter to resubmit after a failure now works without first editing the description
### v2.1.91

- `/feedback` now explains why it's unavailable instead of disappearing from the slash menu
### v2.1.86

- Fixed potential out-of-memory crash when using `/feedback` on very long sessions with large transcript files
### v2.1.77

- Fixed Ctrl+D in `/feedback` text input deleting forward instead of the second press exiting the session
### v2.1.14

- Fixed `/feedback` command generating invalid GitHub issue URLs when description is very long
