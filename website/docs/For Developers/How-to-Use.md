---
sidebar_position: 2
---

# How to Use

See [FOX-contract](https://github.com/FOX-Finance/FOX-contract) for more details.

---

## Requirements

```bash
$ npm install
```

## Set `.env`

and/or `.env.test` for test environment.

Now we can use pre-defined values as environment variable, with a command prefix `dotenv -e .env.test --`.

## Deploy

```bash
$ dotenv -e .env.test -- npx hardhat run scripts/deploy.js --network localhost
```
