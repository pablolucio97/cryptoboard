import { Flex, HStack, VStack, Text } from '@chakra-ui/react';
import Head from "next/head";
import React from "react";
import { DailyCoin } from '../components/DailyCoin';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { TopCoin } from '../components/TopCoin';


export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoBoard | Mercado</title>
      </Head>
      <Flex
        display="flex"
        flexDirection='column'
        alignSelf='center'
        width="80vw"
        margin='0 auto 2rem'
        justifyContent='flex-start'
        alignItems='center'
        padding='0 4rem'
      >
        <VStack
          display="flex"
          flexDirection='column'
          alignItems='flex-start'
        >
          <Title
            content="Top Coins"
          />
          <SubTitle
            content="Moedas com maior volume de negociação diária nas últimas 24h"
          />
          <HStack>
            <TopCoin />
            <TopCoin />
            <TopCoin />
          </HStack>
        </VStack>
        <VStack
          display="flex"
          flexDirection='column'
          alignItems='flex-start'
        >
          <Title
            content="Mercado"
          />
          <SubTitle
            content="Preço de criptomoedas hoje"
          />
          <VStack
            width="880px"
            backgroundColor='white'
            padding='1rem'
          >
            <HStack
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              width="100%"
            >
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
                marginLeft='2.48rem'
              >
                Moeda
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
              >
                Valor
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
              >
                24h
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
              >
                7d
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
                marginLeft='3rem'
              >
                Supply
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
              >
                MarketCap
              </Text>
            </HStack>
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
            <DailyCoin />
          </VStack>
        </VStack>
      </Flex>
    </>
  )
}
