import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Names", function () {  
  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const Names = await ethers.getContractFactory("Names");
      const names = await Names.deploy();

      //expect().to.equal(true);
    });
  });
});
