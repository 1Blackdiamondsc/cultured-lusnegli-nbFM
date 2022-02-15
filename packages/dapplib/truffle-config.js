require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember modify inflict industry flush sunset'; 
let testAccounts = [
"0xe897d5fe5f4801ad06d6aa25b17b40db694b88b4e8f42fe66209ec44098a97ef",
"0x7ebf8ba5764cd30b1b8b4af5ef734b272d34748db495251759499a58ad8ea366",
"0x8ea1e97a41d397f356b1d96c75c2f08d414eed91468da2597f18a4f1f3241aca",
"0x232c77e39354b1745f79a99b0688282b78b8df908e5b638590766b02eee7ea9c",
"0xcf25e68961d4c6e7045db6707cddbb56c7125729c97c503b2db265c51b42c2f3",
"0x61447d214c97f058939d873855efa656e96335095236d41f344aeeab2c403e97",
"0x1f5eeb525ea2f2b316ea708e44de6a7516acff2df21e8937b7ed5c37df1f8f96",
"0x5925183ee6e3cf3da517d52aa56136f532cfb8749b185206249cbd4fec5c061e",
"0x6b642fc1524fce8aed329a8f2b6448effc8f9f77b45728268d01ef25aa0309ce",
"0x9fe6d91ed546274f1497a85a9e4673c8a391fb565dbc0436f418c64605db4b89"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


