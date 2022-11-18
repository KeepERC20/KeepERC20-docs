---
sidebar_position: 3
---

# Overview

![](./images/fig4.png)

The user can participate in KeepERC20 system with any ERC20 token.
- The sender's ERC20 tokens are internally wrapped into KeepERC20 tokens to benefit from various functions through smart contract and Chainlink Automation.
- KeepERC20 tokens are internally unwrapped into ERC20 tokens, so the receiver can easily use received tokens for other Dapps.

Some tasks may be impossible with just simple token wrapping, such as ownership-related function calls.
In that case KeepERC20 system creates a safe contract wallet internally and provides those functions seamlessly.
