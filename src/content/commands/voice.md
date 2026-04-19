---
name: "/voice"
introducedIn: "2.1.59"
description: "Fixed Android app crash when running local slash commands (`/voice`, `/cost`) in Remote Control sessions"
category: slash
---

# /voice

Fixed Android app crash when running local slash commands (`/voice`, `/cost`) in Remote Control sessions

## 関連リリース

### v2.1.84

- Slash commands unavailable for the current auth setup (`/voice`, `/mobile`, `/chrome`, `/upgrade`, etc.) are now hidden instead of shown
### v2.1.76

- Fixed `/voice` not working on Windows when installed via npm
- Improved `/voice` to show your dictation language on enable and warn when your `language` setting isn't supported for voice input
### v2.1.75

- Fixed voice mode not activating correctly on fresh installs without toggling `/voice` twice
### v2.1.69

- Fixed Android app crash when running local slash commands (`/voice`, `/cost`) in Remote Control sessions
