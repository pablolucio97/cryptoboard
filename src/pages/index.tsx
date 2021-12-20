import { Flex, HStack, VStack, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { DailyCoin } from '../components/DailyCoin';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { TopCoin } from '../components/TopCoin';


type CoinProps = {
  id: number;
  symbol: string;
  name: string;
  price?: number
  circulatingSupply?: number
  volume?: number;
  iconUrl?: string;
  rank?: number;
  history?: number[];
  marketCap?: number;
}

export default function Home({returnedCoins}) {

  const sortCoinsByMarketCap = returnedCoins.sort((minMarketCap, maxMarketCap) => {
    if(minMarketCap.marketCap < maxMarketCap.marketCap) return 1
    if(minMarketCap.marketCap > maxMarketCap.marketCap) return -1
    else return 0
  })

  const [topCoins, setTopCoins] = useState<CoinProps[]>(sortCoinsByMarketCap.slice(0,3))
 
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
              {topCoins.map(coin => (
                <TopCoin
                  id={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  iconUrl={coin.iconUrl}
                />
              ))}
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

export const getServerSideProps: GetServerSideProps = async () => {

  const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }

  const response = await fetch('https://coinranking1.p.rapidapi.com/coins', {
    headers
  })

  const data = await response.json()
  const { coins } = data.data

  const returnedCoins = coins.map(coin => {
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      price: Intl.NumberFormat('en-US', {
        maximumFractionDigits: coin.price >= 1 ? 2 : 6
      }).format(coin.price),
      circulatingSupply: coin.circulatingSupply,
      volume: coin.volume,
      iconUrl: coin.iconUrl,
      rank: coin.rank,
      history: coin.history,
      marketCap: coin.marketCap
    }
  })

  return {
    props: {
      returnedCoins
    }
  }
}
