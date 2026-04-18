---
name: "/plugin"
introducedIn: "2.0.13"
description: "Fixed `/plugin` not working on native build"
category: slash
---

# /plugin

Fixed `/plugin` not working on native build

## 関連リリース

### v2.1.110

- Improved `/plugin` Installed tab — items needing attention and favorites appear at the top, disabled items are hidden behind a fold, and `f` favorites the selected item
- Fixed plugin install not honoring dependencies declared in `plugin.json` when the marketplace entry omits them; `/plugin` install now lists auto-installed dependencies
### v2.1.101

- Improved `/plugin` and `claude plugin update` to show a warning when the marketplace could not be refreshed, instead of silently reporting a stale version
### v2.1.86

- Fixed `/plugin` uninstall dialog: pressing `n` now correctly uninstalls the plugin while preserving its data directory
### v2.1.75

- Fixed managed-disabled plugins showing up in the `/plugin` Installed tab — plugins force-disabled by your organization are now hidden
### v2.1.71

- Improved plugin-provided MCP server deduplication — servers that duplicate a manually-configured server (same command/URL) are now skipped, preventing duplicate connections and tool sets. Suppressions are shown in the `/plugin` menu.
### v2.1.70

- Fixed plugins showing as inaccurately installed in `/plugin`
### v2.1.69

- Fixed plugin Stop/SessionEnd/etc hooks not firing after any `/plugin` operation
### v2.0.13

- Fixed `/plugin` not working on native build
