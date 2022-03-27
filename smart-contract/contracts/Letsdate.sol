// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Letsdate is ERC721URIStorage {
    uint256 LETSDATE_TOKEN_ID;

    constructor() ERC721("LetsdateNFT", "LN") {}

    function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
        _mint(_userOne, LETSDATE_TOKEN_ID);
        _setTokenURI(LETSDATE_TOKEN_ID, tokenURI);
         LETSDATE_TOKEN_ID++;

        _mint(_userTwo,LETSDATE_TOKEN_ID);
        _setTokenURI(LETSDATE_TOKEN_ID, tokenURI);
        LETSDATE_TOKEN_ID++;
    }
}