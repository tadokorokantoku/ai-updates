---
name: "/fork"
introducedIn: "2.1.47"
description: "Fixed crash when using `/fork` on sessions that used web search — null entries in search results from transcript deserialization are now handled gracefully (anthropics/claude-code#25811)"
category: slash
---

# /fork

Fixed crash when using `/fork` on sessions that used web search — null entries in search results from transcript deserialization are now handled gracefully (anthropics/claude-code#25811)

## 関連リリース

### v2.1.77

- Renamed `/fork` to `/branch` (`/fork` still works as an alias)
### v2.1.71

- Fixed forked conversations (`/fork`) sharing the same plan file, which caused plan edits in one fork to overwrite the other
### v2.1.47

- Fixed crash when using `/fork` on sessions that used web search — null entries in search results from transcript deserialization are now handled gracefully (anthropics/claude-code#25811)
