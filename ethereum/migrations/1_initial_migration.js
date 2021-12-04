const Migrations = artifacts.require("Migrations");
const iVote = artifacts.require("iVote");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(iVote);
};
