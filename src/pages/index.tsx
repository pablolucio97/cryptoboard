import { Flex, HStack, VStack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from "next/head";
import React, { useState, useEffect, useMemo } from "react";
import { DailyCoin } from '../components/DailyCoin';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { TopCoin } from '../components/TopCoin';
import { Pagination } from '../components/Pagination'
import { useCryptosList, fetchCryptos } from '../hooks/useCryptosList'


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

export default function Home({ returnedCoins }) {

  const { data, isLoading, isError } = useCryptosList({ initialData: returnedCoins })


  const sortCoinsByMarketCap = useMemo(() => {
    //@ts-ignore
    const coins = data.sort((minMarketCap, maxMarketCap) => {
      if (minMarketCap.marketCap < maxMarketCap.marketCap) return 1
      if (minMarketCap.marketCap > maxMarketCap.marketCap) return -1
      else return 0
    }).slice(0, 3)
    return coins
  }, [])

  const sortCoinsByRanking = useMemo(() => {
    //@ts-ignore
    const coins = data.sort((minRanking, maxRanking) => {
      if (minRanking.rank < maxRanking.rank) return -1
      if (minRanking.rank > maxRanking.rank) return 1
      else return 0
    }).slice(0, 10)
    return coins
  }, [])

  const [topCoins, setTopCoins] = useState<CoinProps[]>(sortCoinsByMarketCap)
  const [dailyCoins, setDailyCoins] = useState<CoinProps[]>(sortCoinsByRanking)

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
                price={coin.price}
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
              justifyContent="flex-start"
              width="100%"
            >
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
                marginRight='2rem'
                width='240px'
              >
                Moeda
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
                width='120px'
              >
                Valor
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                fontSize='.88rem'
                width='240px'
              >
                Supply
              </Text>
              <Text
                color='black'
                fontWeight='800'
                textAlign='center'
                width='240px'
                fontSize='.88rem'
              >
                MarketCap
              </Text>
            </HStack>
            {dailyCoins.map(coin => (
              <DailyCoin
                id={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                circulatingSupply={coin.circulatingSupply}
                marketCap={coin.marketCap}
                iconUrl={coin.iconUrl}
                price={coin.price}
              />
            ))}
          </VStack>
        </VStack>
            <Pagination 
              onPageChange={() => {}}
              totalCountOfRegisters={20}
              currentPage={1}
            />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const returnedCoins = await fetchCryptos()

  return {
    props: {
      returnedCoins
    },
    revalidate: 5
  }
}
