import React from 'react'
import ReactDOM from 'react-dom'
import { Localhost, Mainnet, DAppProvider, Rinkeby, Ropsten, Kovan, Config, DEFAULT_SUPPORTED_CHAINS } from '@usedapp/core'
import { App } from './App'
import { getDefaultProvider } from 'ethers'
 
import { getChain } from '@inti-ar/evm-chains'

import { RSK, RSK_TEST, BFA, BFA_TEST } from './custom-chains'

const LOCALHOST_URL = 'http://localhost:7545'

const config: Config = {
  readOnlyUrls: {
    [Localhost.chainId]: LOCALHOST_URL,
    [Mainnet.chainId]: process.env.MAINNET_URL || getDefaultProvider('mainnet'),
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
    [Rinkeby.chainId]: process.env.RINKEBY_URL || getDefaultProvider('rinkeby'),
    [RSK.chainId]: getChain(RSK.chainId).rpc[0],
    [RSK_TEST.chainId]: getChain(RSK_TEST.chainId).rpc[0],
    [Kovan.chainId]: getDefaultProvider('kovan'),
    [BFA.chainId]: getChain(BFA.chainId).rpc[0],
    [BFA_TEST.chainId]: getChain(BFA_TEST.chainId).rpc[0],
  },
  networks: [Mainnet, Ropsten, Rinkeby, RSK, RSK_TEST, Kovan, Localhost, BFA, BFA_TEST],
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
