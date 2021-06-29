const SimpleSmartContract = artifacts.require("SimpleSmartContract");

contract("SimpleSmartContract", () => {
  it("deploys a smart contract !", async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed();
    assert(simpleSmartContract.address !== "");
  });
});
