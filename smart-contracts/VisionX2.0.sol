// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ContributionToken is ERC20, Ownable {

    constructor() ERC20("ContributionToken", "CTK") Ownable(msg.sender) {
        // Mint initial supply to the contract deployer
        _mint(msg.sender, 1000 * 10 ** decimals()); // 1000 initial tokens
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}