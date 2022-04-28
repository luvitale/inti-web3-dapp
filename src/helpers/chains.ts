import { IChainData } from "./types";

import { getChain } from "@inti-ar/evm-chains";

export const BFA_MAINNET = getChain(200941592);
export const BFA_TESTNET = getChain(99118822);

const supportedChains: IChainData[] = [
  {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Ethereum Ropsten",
    short_name: "rop",
    chain: "ETH",
    network: "ropsten",
    chain_id: 3,
    network_id: 3,
    rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Ethereum Rinkeby",
    short_name: "rin",
    chain: "ETH",
    network: "rinkeby",
    chain_id: 4,
    network_id: 4,
    rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Ethereum Görli",
    short_name: "gor",
    chain: "ETH",
    network: "goerli",
    chain_id: 5,
    network_id: 5,
    rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "RSK Mainnet",
    short_name: "rsk",
    chain: "RSK",
    network: "mainnet",
    chain_id: 30,
    network_id: 30,
    rpc_url: getChain(30).rpc[0],
    native_currency: {
      symbol: "RBTC",
      name: "Smart Bitcoin",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "RSK Testnet",
    short_name: "rskt",
    chain: "RSK",
    network: "testnet",
    chain_id: 31,
    network_id: 31,
    rpc_url: getChain(31).rpc[0],
    native_currency: {
      symbol: "tRBTC",
      name: "Smart Bitcoin Testnet",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Ethereum Kovan",
    short_name: "kov",
    chain: "ETH",
    network: "kovan",
    chain_id: 42,
    network_id: 42,
    rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Ethereum Classic Mainnet",
    short_name: "etc",
    chain: "ETC",
    network: "mainnet",
    chain_id: 61,
    network_id: 1,
    rpc_url: "https://ethereumclassic.network",
    native_currency: {
      symbol: "ETC",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "POA Network Sokol",
    short_name: "poa",
    chain: "POA",
    network: "sokol",
    chain_id: 77,
    network_id: 77,
    rpc_url: "https://sokol.poa.network",
    native_currency: {
      symbol: "POA",
      name: "POA",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "POA Network Core",
    short_name: "skl",
    chain: "POA",
    network: "core",
    chain_id: 99,
    network_id: 99,
    rpc_url: "https://core.poa.network",
    native_currency: {
      symbol: "POA",
      name: "POA",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "xDAI Chain",
    short_name: "xdai",
    chain: "POA",
    network: "dai",
    chain_id: 100,
    network_id: 100,
    rpc_url: "https://dai.poa.network",
    native_currency: {
      symbol: "xDAI",
      name: "xDAI",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Callisto Mainnet",
    short_name: "clo",
    chain: "callisto",
    network: "mainnet",
    chain_id: 820,
    network_id: 1,
    rpc_url: "https://clo-geth.0xinfra.com/",
    native_currency: {
      symbol: "CLO",
      name: "CLO",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Binance Smart Chain",
    short_name: "bsc",
    chain: "smartchain",
    network: "mainnet",
    chain_id: 56,
    network_id: 56,
    rpc_url: "https://bsc-dataseed1.defibit.io/",
    native_currency: {
      symbol: "BNB",
      name: "BNB",
      decimals: "18",
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Blockchain Federal Argentina",
    short_name: BFA_MAINNET.shortName,
    chain: BFA_MAINNET.chain,
    network:  BFA_MAINNET.network,
    chain_id: BFA_MAINNET.chainId,
    network_id: BFA_MAINNET.networkId,
    rpc_url: BFA_MAINNET.rpc[0],
    native_currency: {
      symbol: BFA_MAINNET.nativeCurrency.symbol,
      name: BFA_MAINNET.nativeCurrency.name,
      decimals: BFA_MAINNET.nativeCurrency.decimals.toString(),
      contractAddress: "",
      balance: ""
    }
  },
  {
    name: "Blockchain Federal Argentina Testnet",
    short_name: BFA_TESTNET.shortName,
    chain: BFA_TESTNET.chain,
    network:  BFA_TESTNET.network,
    chain_id: BFA_TESTNET.chainId,
    network_id: BFA_TESTNET.networkId,
    rpc_url: BFA_TESTNET.rpc[0],
    native_currency: {
      symbol: BFA_TESTNET.nativeCurrency.symbol,
      name: BFA_TESTNET.nativeCurrency.name,
      decimals: BFA_TESTNET.nativeCurrency.decimals.toString(),
      contractAddress: "",
      balance: ""
    }
  },
];

export default supportedChains;
