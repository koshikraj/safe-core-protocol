// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;

interface ISafeStreetWrapper {
    /// @param module Address of the module that should be checked
    /// @param account Address of the Safe Account that should be checked
    /// @return token MUST return the type of token for payment
    /// @return amount MUST return the amount of token for payment
     /// @return fullfilled MUST return if the payment has been made

    function checkAccountPaymentInfo(address module, address account) external view returns (address token, uint64 amount, bool fullfilled);

}
