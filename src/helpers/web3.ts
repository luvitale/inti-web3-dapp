import { DAI_CONTRACT, VOTING_CONTRACT } from '../constants'

export function getDaiContract(chainId: number, web3: any) {
  const dai = new web3.eth.Contract(
    DAI_CONTRACT[chainId].abi,
    DAI_CONTRACT[chainId].address
  )
  return dai
}

export function callBalanceOf(address: string, chainId: number, web3: any) {
  return new Promise(async(resolve, reject) => {
    const dai = getDaiContract(chainId, web3)

    await dai.methods
      .balanceOf(address)
      .call(
        { from: '0x0000000000000000000000000000000000000000' },
        (err: any, data: any) => {
          if (err) {
            reject(err)
          }

          resolve(data)
        }
      )
  })
}

export function callTransfer(address: string, chainId: number, web3: any) {
  return new Promise(async(resolve, reject) => {
    const dai = getDaiContract(chainId, web3)

    await dai.methods
      .transfer(address, '1')
      .send({ from: address }, (err: any, data: any) => {
        if (err) {
          reject(err)
        }

        resolve(data)
      })
  })
}

// Voting
export const getVotingContract = (chainId: number, web3: any) => {
  const votingContract = new web3.eth.Contract(
    VOTING_CONTRACT[chainId].abi,
    VOTING_CONTRACT[chainId].address
  )
  return votingContract
}

export const vote = (address: string, chainId: number, web3: any, candidate: string) => {
  return new Promise(async(resolve, reject) => {
    const votingContract = getVotingContract(chainId, web3);

    const candidateBytes32 = web3.utils.asciiToHex(candidate);

    await votingContract.methods
      .vote(candidateBytes32)
      .send({ from: address }, (err: any, data: any) => {
        if (err) {
          reject(err)
        }

        resolve(data)
      })
  })
}

export const getReceivedVotes = (address: string, chainId: number, web3: any, candidate: string) => {
  return new Promise(async(resolve, reject) => {
    const votingContract = getVotingContract(chainId, web3);

    const candidateBytes32 = web3.utils.asciiToHex(candidate);

    await votingContract.methods
      .getReceivedVotes(candidateBytes32)
      .call({ from: address }, (err: any, data: any) => {
        if (err) {
          reject(err)
        }

        resolve(data)
      })
  })
}
