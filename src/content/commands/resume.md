---
name: "/resume"
introducedIn: "2.0.12"
description: "Avoid mentioning hooks in `/resume` summaries"
category: slash
---

# /resume

Avoid mentioning hooks in `/resume` summaries

## 関連リリース

### v2.1.111

- Fixed tab-completing `/resume` immediately resuming an arbitrary titled session instead of showing the session picker
### v2.1.108

- Improved `/resume` picker to default to sessions from the current directory; press `Ctrl+A` to show all projects
### v2.1.105

- Fixed "Resume this session with..." hint not printing on exit after `/resume`, `--worktree`, or `/branch`
### v2.1.101

- Fixed several `/resume` picker issues: narrow default view hiding sessions from other projects, unreachable preview on Windows Terminal, incorrect cwd in worktrees, session-not-found errors not surfacing in stderr, terminal title not being set, and resume hint overlapping the prompt input
### v2.1.98

- Fixed several `/resume` picker issues: `--resume <name>` opening uneditable, filter reload wiping search state, empty list swallowing arrow keys, cross-project staleness, and transient task-status text replacing conversation summaries
- Improved `/resume` filter hint labels and added project/worktree/branch names in the filter indicator
### v2.1.97

- Fixed several `/resume` picker issues: `--resume <name>` opening uneditable, Ctrl+A reload wiping search, empty list swallowing navigation, task-status text replacing conversation summary, and cross-project staleness
### v2.1.90

- Improved `/resume` all-projects view to load project sessions in parallel, improving load times for users with many projects
### v2.1.79

- Fixed `SessionEnd` hooks not firing when using interactive `/resume` to switch sessions
### v2.1.75

- Fixed `/resume` losing session names after resuming a forked or continued session
### v2.1.73

- Fixed `/resume` showing the current session in the picker
### v2.1.69

- Changed the `/resume` picker to show your most recent prompt instead of the first one. This also resolves some titles appearing as `(session)`.
### v2.1.33

- Fixed `/resume` session picker showing raw XML markup instead of clean titles for sessions started with slash commands
### v2.0.64

- Improved `/resume` screen with grouped forked sessions and keyboard shortcuts for preview (P) and rename (R)
### v2.0.12

- Avoid mentioning hooks in `/resume` summaries
