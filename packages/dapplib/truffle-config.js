require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stove dash super code gesture light army giggle'; 
let testAccounts = [
"0xf97a290f20ff5170b0c858f2732b6fb2b70bbc2580c63c4ec8a9d6c2ab316fb9",
"0xd6b04970f60c8624929ed0f1bdcbe49cc51f1075276e3129d0a006b226be3ac0",
"0x666c8916849d8445160c07c5f16958ed567910b49ecb8a19b08748777e2f4aed",
"0x74f3df2e130a063f6a63d66572747ad71ccbd5322428206539c2a763dc5c3cea",
"0x4b63c2777ed38f17855d96215ad801d3a53cda56dd4e9c00788c0dce94e12806",
"0xda7c30f3a69ad8e386c2f5611c725e8d42e84202ce6b429e4c57131d278e23b9",
"0xcbea3196f8a6ec527c9032b4adc73d4ae421012e4fcaaa80e03f8804e543788c",
"0x964594b82bad9e75ae4bd5bf16d01e6989ee3d1d93acd31580d64ef61256fab7",
"0xd0d7d6cf64b3e8753def102ca93d452e1d94f0caa547f5b2d34a0a690284abef",
"0xdc3b2364349a50b4a9757631845f31dc6416352e8a8e08f484429d876d365c04"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

