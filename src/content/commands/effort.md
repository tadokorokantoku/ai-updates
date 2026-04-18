---
name: "/effort"
introducedIn: "2.1.73"
description: "Improved `/effort` to work while Claude is responding, matching `/model` behavior"
category: slash
---

# /effort

Improved `/effort` to work while Claude is responding, matching `/model` behavior

## 関連リリース

### v2.1.111

- Added `xhigh` effort level for Opus 4.7, sitting between `high` and `max`. Available via `/effort`, `--effort`, and the model picker; other models fall back to `high`
- `/effort` now opens an interactive slider when called without arguments, with arrow-key navigation between levels and Enter to confirm
### v2.1.94

- Changed default effort level from medium to high for API-key, Bedrock/Vertex/Foundry, Team, and Enterprise users (control this with `/effort`)
### v2.1.80

- Improved `/effort` to show what auto currently resolves to, matching the status bar indicator
### v2.1.76

- Added `/effort` slash command to set model effort level
### v2.1.73

- Improved `/effort` to work while Claude is responding, matching `/model` behavior
