require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeyTest = '563ab9e801d9ddfed85980c03b926c2ba618f0d4deb3218622cc627630f51335';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1666700000," 
    },
    testnet: {
      provider: () => {
        // use private key
        return new HDWalletProvider({
          //mnemonic,
          providerOrUrl: 'https://api.s0.b.hmny.io', 
          privateKeys: [privateKeyTest],

          
        });
      },
      network_id: 1666700000, 
      gas: 20000000,   
      gasPrice: 470000000000,
      networkCheckTimeout: 10000,
     timeoutBlocks: 200
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
