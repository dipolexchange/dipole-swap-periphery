const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic = "tilt ceiling glare usual split tongue unable rookie expect income cheap reform";

// const networkUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const networkUrl = 'http://10.1.1.51:6789';

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  // contracts_directory: "./contracts/DipoleFactory.sol",
  networks: {
    development: {
      network_id: "*",       // Any network (default: none)
      // gas: 999999,
      // gasPrice: 50000000004,
      provider: () => new HDWalletProvider(mnemonic, networkUrl),
      networkCheckTimeout: 50000
    },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   }
  },
  //
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        }
    //  evmVersion: "byzantium"
      }
    }
  }
};
