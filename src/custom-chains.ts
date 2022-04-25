import { Chain } from '@usedapp/core'

import { getChain } from '@inti-ar/evm-chains'

import { getChainById as defaultGetChainById } from '@usedapp/core/dist/esm/src/helpers'

const RSK_CHAIN = getChain(30);
const RSK_TEST_CHAIN = getChain(31);

const BFA_CHAIN = getChain(200941592);
const BFA_TEST_CHAIN = getChain(99118822);

export const RSK: Chain = {
    chainId: RSK_CHAIN.chainId,
    chainName: RSK_CHAIN.name,
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x6c62bf5440de2cb157205b15c424bceb5c3368f5',
    getExplorerAddressLink: (address: string) => `https://explorer.rsk.co/#/address/${address}`,
    getExplorerTransactionLink: (txHash: string) => `https://explorer.rsk.co/#/tx/${txHash}`,
}

export const RSK_TEST: Chain = {
    chainId: RSK_TEST_CHAIN.chainId,
    chainName: RSK_TEST_CHAIN.name,
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x9e469e1fc7fb4c5d17897b68eaf1afc9df39f103',
    getExplorerAddressLink: (address: string) => `https://explorer.testnet.rsk.co/#/address/${address}`,
    getExplorerTransactionLink: (txHash: string) => `https://explorer.testnet.rsk.co/#/tx/${txHash}`,
}

export const BFA: Chain = {
    chainId: BFA_CHAIN.chainId,
    chainName: BFA_CHAIN.name,
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x6c62bf5440de2cb157205b15c424bceb5c3368f5',
    getExplorerAddressLink: (address: string) => `http://bfascan.com.ar/#/address/${address}`,
    getExplorerTransactionLink: (txHash: string) => `http://bfascan.com.ar/#/tx/${txHash}`,
}

export const BFA_TEST: Chain = {
    chainId: BFA_TEST_CHAIN.chainId,
    chainName: BFA_TEST_CHAIN.name,
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x6c62bf5440de2cb157205b15c424bceb5c3368f5',
    getExplorerAddressLink: (address: string) => `http://bfascan.com.ar/#/address/${address}`,
    getExplorerTransactionLink: (txHash: string) => `http://bfascan.com.ar/#/tx/${txHash}`,
}

export const getChainById = (chainId: number) => {
    switch (chainId) {
        case RSK.chainId: return RSK;
        case RSK_TEST.chainId: return RSK_TEST;
        case BFA.chainId: return BFA;
        case BFA_TEST.chainId: return BFA_TEST;
        default: return defaultGetChainById(chainId);
    }
}