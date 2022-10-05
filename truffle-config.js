require('babel-register');
require('babel-polyfill');
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

//const privateKeys = process.env.TESTNET_PRIVATE_KEY



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
          //process.env.PRIVATE_KEY,
          //mnemonic,
          providerOrUrl: 'https://api.s0.b.hmny.io', 
          privateKeys: [privateKeyTest],
         // process.env.TESTNET_PRIVATE_KEY
       

          
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
