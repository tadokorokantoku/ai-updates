---
name: "/copy"
introducedIn: "2.1.20"
description: "Changed the `/copy` command to be available to all users"
category: slash
---

# /copy

Changed the `/copy` command to be available to all users

## 関連リリース

### v2.1.113

- Fixed `/copy` "Full response" not aligning markdown table columns for pasting into GitHub, Notion, or Slack
### v2.1.77

- `/copy` now accepts an optional index: `/copy N` copies the Nth-latest assistant response
### v2.1.72

- Added `w` key in `/copy` to write the focused selection directly to a file, bypassing the clipboard (useful over SSH)
### v2.1.63

- Added "Always copy full response" option to the `/copy` picker. When selected, future `/copy` commands will skip the code block picker and copy the full response directly.
### v2.1.59

- Added `/copy` command to show an interactive picker when code blocks are present, allowing selection of individual code blocks or the full response.
### v2.1.20

- Changed the `/copy` command to be available to all users
