---
sidebar_position: 2
---

# Recoverable Transfer

<!-- TODO: image -->

The recoverable transfer can be treated as a kind of insurance because users can use it to prepare for mispayment. 
When the tokens were sent to an address where the private key didn’t exist or sent to the wrong contract,
there was no way to recover them before.

However, if you use KeepERC20's recoverable transfer, you can get them back completely. Except for some fees.

The asset transfer through this function is finalized only when the receiver publishes unwrap transaction. If tokens are sent to the wrong address so no one can access them, the tokens will automatically return to the sender through Chainlink Automation after the expiration.
