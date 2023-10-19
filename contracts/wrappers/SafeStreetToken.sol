// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SafeStreetToken is ERC20, Ownable {
    constructor(address owner) ERC20("SafeStreetToken", "SUSD") {
        _mint(owner, 1000000 * 10 ** uint256(decimals())); // Mint 1,000 tokens with 18 decimal places
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** uint256(decimals()));
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount * 10 ** uint256(decimals()));
    }
}