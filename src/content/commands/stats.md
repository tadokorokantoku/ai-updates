---
name: "/stats"
introducedIn: "2.1.0"
description: "Improved `/stats` output"
category: slash
---

# /stats

Improved `/stats` output

## 関連リリース

### v2.1.89

- Fixed `/stats` undercounting tokens by excluding subagent usage, and losing historical data beyond 30 days when the stats cache format changes
### v2.1.69

- Fixed `/stats` crash when transcript files contain entries with missing or malformed timestamps
### v2.1.6

- Added date range filtering to `/stats` command - press `r` to cycle between Last 7 days, Last 30 days, and All time
### v2.1.0

- Improved `/stats` output
