---
name: "/mcp"
introducedIn: "0.2.9"
description: "[VSCode] Added native MCP server management dialog — use `/mcp` in the chat panel to enable/disable servers, reconnect, and manage OAuth authentication without switching to the terminal"
category: slash
---

# /mcp

[VSCode] Added native MCP server management dialog — use `/mcp` in the chat panel to enable/disable servers, reconnect, and manage OAuth authentication without switching to the terminal

## 関連リリース

### v2.1.101

- Fixed the `/mcp` menu offering OAuth-specific actions for MCP servers configured with `headersHelper`; Reconnect is now offered instead to re-invoke the helper script
### v2.1.77

- Fixed input deadlock when opening `/mcp` or similar dialogs while the agent is running
### v2.1.70

- [VSCode] Added native MCP server management dialog — use `/mcp` in the chat panel to enable/disable servers, reconnect, and manage OAuth authentication without switching to the terminal
