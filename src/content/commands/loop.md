---
name: "/loop"
introducedIn: "2.1.71"
description: "Added `/loop` command to run a prompt or slash command on a recurring interval (e.g. `/loop 5m check the deploy`)"
category: slash
---

# /loop

Added `/loop` command to run a prompt or slash command on a recurring interval (e.g. `/loop 5m check the deploy`)

## 関連リリース

### v2.1.113

- Improved `/loop`: pressing Esc now cancels pending wakeups, and wakeups display as "Claude resuming /loop wakeup" for clarity
### v2.1.105

- `/proactive` is now an alias for `/loop`
### v2.1.85

- Added timestamp markers in transcripts when scheduled tasks (`/loop`, `CronCreate`) fire
### v2.1.73

- Fixed `/loop` not being available on Bedrock/Vertex/Foundry and when telemetry was disabled
### v2.1.71

- Added `/loop` command to run a prompt or slash command on a recurring interval (e.g. `/loop 5m check the deploy`)
