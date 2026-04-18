---
name: "/doctor"
introducedIn: "2.0.12"
description: "Comprehensive error messages and diagnostics via `/doctor` command"
category: slash
---

# /doctor

Comprehensive error messages and diagnostics via `/doctor` command

## 関連リリース

### v2.1.110

- Improved `/doctor` to warn when an MCP server is defined in multiple config scopes with different endpoints
### v2.1.105

- Improved `/doctor` layout with status icons; press `f` to have Claude fix reported issues
### v2.1.6

- Added Updates section to `/doctor` showing auto-update channel and available npm versions (stable/latest)
### v2.1.3

- Added detection and warnings for unreachable permission rules, with warnings in `/doctor` and after saving rules that include the source of each rule and actionable fix guidance
### v2.0.67

- Show reason why autoupdater is disabled in `/doctor`
### v2.0.12

- Comprehensive error messages and diagnostics via `/doctor` command
