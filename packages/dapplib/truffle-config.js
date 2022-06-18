require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember unique install battle flock thought'; 
let testAccounts = [
"0xac8306a2161b6a79de134c9e44b2eb615217d3482832ec70a8ddd6877c81fc47",
"0x9c509779f9f63233e5e9e9166eb3a2b0d3e68d144f8958057353c926083d25ac",
"0x7edac1029069a5db21789acaa220b63d04cbeb9d643aa9b04963c8ecd3ad9fa6",
"0x2b51199ae3e5583aea871dc90daca802b7c4ca415043e2f001facaa7962d2500",
"0x4b69d36a5908f86e7ead48c6e822864595e378eee63b58069e7018f49fd847c0",
"0xdffc0fc780f9561931ef21ee181c4135e345cdcb685d7ec3473802b6d9546e2f",
"0xce3fa624b0b54439a02b67546289f37d99bae107d085f0c5a39ce97acce66278",
"0x7160284bc1c7c0d3e5cbbc7f51a48bb76dace114bd5fdb4c8632624e4bc499d0",
"0xd64c04603cb3bb8d53599a6b934176f99e91069e3efc2f3bc26077a0eeb58e48",
"0x6e4a623f13705619ddb6bd554577aeddd10c460c508be77c01653b2abf387228"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

