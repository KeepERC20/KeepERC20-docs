---
sidebar_position: 2
---

# Deploy

See [KeepERC20-wrapper](https://github.com/KeepERC20/KeepERC20-wrapper) for more details.

---

## Requirements

```bash
$ npm install
```

## Set `.env`

and/or `.env.test` for test environment.

Now we can use pre-defined values as environment variable, with a prefix `dotenv -e <ENV> --`. For example, `dotenv -e .env.test --`.

## Run Node

```bash
$ dotenv -e .env.test -- npx hardhat node --network hardhat
```

## Deploy

```bash
$ dotenv -e .env -- npx hardhat run scripts/deploy.js --network localhost
```

---

*Mumbai testnet is used for a concrete example.*

```bash
$ dotenv -e .env.test -- npx hardhat run scripts/deploy.js --network mumbai   

Compiled 2 Solidity files successfully

<Set>
Owner:   0x1ccE14942bD77f5c8EdFe408f7116595E18ccaF4 (0.19886533549475788 ETH)
User1:   0x0E723d5710E79907b0E6D3661F3fed0D3452C04c (0.8923594874453868 ETH)
User2:   0xdBf13a0374E70f01DB7d1a570Be84e067B9E1Be1 (0 ETH)
Fee:     0x21De12f081958D5590AB70C172703345286bcDc9 (0 ETH)

<Deploy>
Deploy Token:            0x6f7ebA5Ccf6c1e524df9F0f353843B233f82e48F
Deploy Factory:          0x516e99AccB8Ebd6FC04C5FE4C516b8fF172a37e7
Deploy KeepToken:        0x09955185759C8A5d1668AE9C843185a063b39516
```
