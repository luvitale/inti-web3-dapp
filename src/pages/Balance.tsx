import React from 'react'
import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'

import { getChain } from '@inti-ar/evm-chains'

import { Localhost } from '@usedapp/core'

import { Web3ModalButton } from '../components/account/Web3ModalButton'

const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

export function Balance() {
  const { account, chainId } = useEthers()
  const userBalance = useEtherBalance(account, { chainId })
  const stakingBalance = useEtherBalance(STAKING_CONTRACT, { chainId })

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Balance</Title>
            <Web3ModalButton />
          </SectionRow>
          <ContentBlock>
            {stakingBalance && (
              <ContentRow>
                <Label>ETH2 staking contract holds:</Label> <TextInline>{formatEther(stakingBalance)}</TextInline>{' '}
                <Label>ETH</Label>
              </ContentRow>
            )}
            {chainId && (
              <ContentRow>
                <Label>Chain:</Label> <TextInline>{
                  chainId == Localhost.chainId ? Localhost.chainName : getChain(chainId).name
                }</TextInline>
              </ContentRow>
            )}
            {account && (
              <ContentRow>
                <Label>Account:</Label> <TextInline>{account}</TextInline>
              </ContentRow>
            )}
            {userBalance && (
              <ContentRow>
                <Label>Ether balance:</Label> <TextInline>{formatEther(userBalance)}</TextInline> <Label>ETH</Label>
              </ContentRow>
            )}
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
