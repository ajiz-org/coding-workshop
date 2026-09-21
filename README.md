# AJIZ coding workshop

The workshop site, and the cryptography game players run during the session.

## Site

React, Vite, TypeScript, and Tailwind. The home page asks for a room and a name, then opens a chat on that [Ably](https://ably.com) channel.

```bash
pnpm install
pnpm dev
```

The dev server listens on port 3000.

## Game

The werewolf game lives in [`crypto/`](crypto/). Setup, the authentication rounds, and how to play are in [crypto/README.md](crypto/README.md).
