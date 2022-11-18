---
sidebar_position: 3
---

# Expirable Approve

<!-- TODO: image -->

ERC20's *Approve* is often the target of attack. The expirable-approve reduces the possibility of the hack by automatically canceling approval.

Since the *increase* and *decrease* in ERC20's *Allowance* is a function that only the token owner can call, a contract wallet is created internally to control it with the KeepERC20 contract and Chainlink automation.
