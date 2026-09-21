# crypto

A werewolf game that introduces authentication one primitive at a time, plus a small RSA encrypt/decrypt demo.

A bot posts on an [Ably](https://ably.com) channel. Players answer on the same channel. Each round checks those answers a different way: nothing, a shared secret, a hash, an HMAC, then a nonce so a signed vote cannot be replayed. Night actions use AES-GCM.

## Setup

Python 3.11 or newer.

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
pip install pycryptodome    # used by main.py
```

Put your own Ably key and channel in `client.py` before running the bot. `send` posts with the REST API. `make_reader` listens on the SSE stream and skips messages the bot itself just sent.

## Run

```bash
python game.py
```

That runs the call at the bottom of `game.py`. `s` is `asyncio`. The demo secrets are:

```python
pwd = ["af", "oa", "tt", "qa"]
```

Only one round is active. The others are commented out. The live call is:

```python
s.run(NONCE([*pwd], [None] * len(pwd)))
```

`[*pwd]` is the list of secrets the bot still accepts. `[None] * len(pwd)` is one empty slot per player. A secret is consumed when a player claims it.

Uncomment the rounds from the top to walk through the progression. Leave only one `s.run(...)` uncommented.

## Rounds

Each round shows a hole in the previous check.

1. **NoAuth** — `s.run(NoAuth(3))`. Players post a name. Nothing is checked, so anyone can claim someone else's name.
2. **OTP** — `s.run(OTP(pwd, pwd))`. The message must be the secret itself. That secret is then used up, so later rounds need a key that can be reused.
3. **HASH** — `s.run(HASH(pwd, pwd))`. The message must end with `hash(name:secret)`, SHA3-256, base64. Anyone who sees the hash can replay it.
4. **HMAC** — `s.run(HMAC(pwd, pwd))`. The message must end with `hmac(secret, name)`. Roles are dealt the same way: the bot sends `hmac(secret, role)` for `Wolf`, `Seer`, or `Villager`. A signed vote can still be replayed.
5. **NONCE** — `s.run(NONCE([*pwd], [None] * len(pwd)))`. The live game. The bot announces a starting nonce (base64 of 6 random bytes). Each player has a counter that begins there and increments by one, little-endian, on every accepted message. A registration message is:

   ```text
   Name + hmac(secret, base64(next_nonce) + Name)
   ```

   Wolves then each receive the same shared key, encrypted with AES-GCM under their own secret. Night messages are AES-GCM too. The AES key is PBKDF2-HMAC-SHA256 (100000 iterations) of the password and a fresh 16-byte salt stored in front of the ciphertext.

Wolf count is `floor(sqrt(n))`, plus one seer, and the rest villagers.

## Playing

Day votes are plaintext:

```text
Name: ban Target <hmac>
```

The HMAC is `hmac(secret, base64(next_nonce) + Target)`. Majority bans that player and the bot announces the role. A tie bans nobody.

Night actions are AES-GCM under the player's secret and the next nonce, base64-encoded:

- The seer sends `see Target` and receives that player's role.
- Each wolf sends `eat Target`. Wolves must agree on one target.

Villagers win when no wolves remain. Wolves win when they are the only players left.

`playerkit.use_nonce(nonce_encoded)` rebuilds the bot's helpers from the announced nonce: `verify`, `sign`, `encrypt`, and `decrypt`. A player uses those to stay on the same counter as the bot.

## RSA demo

`main.py` generates a 2048-bit RSA key, encrypts a short message with PKCS#1 OAEP, and decrypts it. It uses PyCryptodome.

```bash
python main.py
```

## Layout

| Path | Role |
| --- | --- |
| `game.py` | Rounds and the night/day loop |
| `client.py` | Ably SSE reader and REST sender |
| `playerkit.py` | Nonce helpers for a player, from the starting nonce |
| `main.py` | RSA-2048 / PKCS#1 OAEP demo |
| `common.py` | Message split and nonce increment |
| `cryplib/` | AES-GCM, key from PBKDF2-HMAC-SHA256 |
| `utils/` | SHA3-256 hash, HMAC, base64, shared-key generation, nonce sign and encrypt |
