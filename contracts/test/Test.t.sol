// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.23;

import { Test } from "forge-std/Test.sol";
import { GhoStreamFacilitator } from "../src/GhoStreamFacilitator.sol";

contract BaseTest is Test {
    GhoStreamFacilitator public ghoStreamFacilitator;

    function setUp() public {
        ghoStreamFacilitator = new GhoStreamFacilitator();
    }
}
