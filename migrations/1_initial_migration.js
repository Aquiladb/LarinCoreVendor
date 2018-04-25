/*
To use only ContractTwo, your artifacts.require() statement would look like this:

var ContractTwo = artifacts.require("ContractTwo");

* */
var Migrations = artifacts.require("./Migrations.sol");
var VendorInvoice = artifacts.require("./VendorInvoice.sol");

module.exports = function(deployer) {
  /*
  a deployer object as its first parameter.
  This object aides in deployment by both providing
  a clear syntax for deploying smart contracts as well as
  performing some of deployment's more mundane duties,
  such as saving deployed artifacts for later use.
  The deployer object is your main interface for staging deployment task
  * */
  deployer.deploy(Migrations);
  deployer.deploy(VendorInvoice);
};
