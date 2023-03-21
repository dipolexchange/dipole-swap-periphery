const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic = "xxxxx"; // ���Ǵʻ�˽Կ

const networkUrl = 'https://devnetopenapi2.platon.network/rpc';

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
