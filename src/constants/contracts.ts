import votingArtifacts from "../abi/Voting.json";

export const DAI_CONTRACT = {
  1: {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    abi: [
      {
        constant: true,
        inputs: [{ name: 'src', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'dst', type: 'address' },
          { name: 'wad', type: 'uint256' }
        ],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ]
  }
}

const votingDeployedNetworks = votingArtifacts.networks;

export const VOTING_CONTRACT = Object.keys(votingDeployedNetworks).reduce((arr, net) => ({
  ...arr, [net]: {
    address: votingDeployedNetworks[net].address,
    abi: votingArtifacts.abi
  }
}), {})
