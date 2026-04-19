---
name: "/config"
introducedIn: "0.2.9"
description: "Changes to the \"verbose\" setting in `/config` now persist across sessions"
category: slash
---

# /config

Changes to the "verbose" setting in `/config` now persist across sessions

## 関連リリース

### v2.1.110

- Added option to show Claude's last response as commented context in the `Ctrl+G` external editor (enable via `/config`)
- Session recap is now enabled for users with telemetry disabled (Bedrock, Vertex, Foundry, `DISABLE_TELEMETRY`). Opt out via `/config` or `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=0`.
### v2.1.108

- Added recap feature to provide context when returning to a session, configurable in `/config` and manually invocable with `/recap`; force with `CLAUDE_CODE_ENABLE_AWAY_SUMMARY` if telemetry disabled.
### v2.1.105

- Improved `/config` labels and descriptions for clarity
### v2.1.101

- Fixed in-app settings writes (e.g. `/add-dir --remember`, `/config`) not refreshing the in-memory snapshot, preventing removed directories from being revoked mid-session
### v2.1.92

- Removed `/vim` command (toggle vim mode via `/config` → Editor mode)
### v2.1.90

- Fixed headers disappearing when scrolling `/model`, `/config`, and other selection screens
### v2.1.83

- Fixed `/config` menu showing both the search cursor and list selection at the same time
### v2.1.79

- Added "Show turn duration" toggle to the `/config` menu
### v2.1.73

- Deprecated `/output-style` command — use `/config` instead. Output style is now fixed at session start for better prompt caching
### v2.1.72

- Improved `/config` — Escape now cancels changes, Enter saves and closes, Space toggles settings
### v2.1.69

- Fixed Tab/arrow keys not cycling Settings tabs when `/config` search box is focused but empty
### v2.1.49

- Fixed verbose mode not updating thinking block display when toggled via `/config` — memo comparators now correctly detect verbose changes
### v2.1.14

- Fixed an issue where `/config`, `/context`, `/model`, and `/todos` command overlays could close unexpectedly
### v2.1.6

- Added search functionality to `/config` command for quickly filtering settings
### v2.1.3

- Added release channel (`stable` or `latest`) toggle to `/config`
### v2.0.71

- Added `/settings` as an alias for the `/config` command
### v2.0.12

- Changes to the "verbose" setting in `/config` now persist across sessions
