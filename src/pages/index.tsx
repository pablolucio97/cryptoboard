import { GetStaticProps } from "next";
import Head from "next/head";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { Flex, HStack, Text, VStack } from "@chakra-ui/react";

import { DailyCoin } from "../components/DailyCoin";
import { Pagination } from "../components/Pagination";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { TopCoin } from "../components/TopCoin";

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

export default function HomeComponent({ returnedCoins }) {

  const [page, setPage] = useState(1)
  const [itemQueryStart, setItemQueryStart] = useState(0)
  const [itemQueryEnd, setItemQueryEnd] = useState(10)

  const sortCoinsByMarketCap = () => {
    const coins = returnedCoins.sort((minMarketCap, maxMarketCap) => {
      if (minMarketCap.marketCap < maxMarketCap.marketCap) return 1
      if (minMarketCap.marketCap > maxMarketCap.marketCap) return -1
      else return 0
    }).slice(0, 3)
    return coins
  }

  const sortCoinsByRanking = () => {
    pagination()
    const coins = returnedCoins.sort((minRanking, maxRanking) => {
      if (minRanking.rank < maxRanking.rank) return -1
      if (minRanking.rank > maxRanking.rank) return 1
      else return 0
    }).slice(itemQueryStart, itemQueryEnd)
    return coins
  }
  const ITEMS_PER_PAGE = 10

  const [topCoins, setTopCoins] = useState<CoinProps[]>(sortCoinsByMarketCap)
  const [dailyCoins, setDailyCoins] = useState<CoinProps[]>(sortCoinsByRanking)


  function pagination() {
    const itemStart = (page - 1) * ITEMS_PER_PAGE
    const itemEnd = itemStart + ITEMS_PER_PAGE
    setItemQueryStart(itemStart)
    setItemQueryEnd(itemEnd)
  }

/*   useEffect(() => {
    setDailyCoins(sortCoinsByRanking)
  }, [dailyCoins]) */


  return (
    <>
      <Head>
        <title>CryptoBoard | Mercado</title>
      </Head>
      <Flex
        display="flex"
        flexDirection='column'
        width={['64vw', '80vw', "80vw", '62vw']}
        margin={['0 auto 2rem', '0 auto 2rem', '0 -8rem 0 2rem', '0 0 0 4rem']}
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
          <HStack
            display='flex'
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems={['center','center','center','flex-start']}
            justifyContent={['space-evenly','space-evenly','space-between','flex-start']}
            padding='.4rem'
            height={['532px', '532px', '240px', '80px']}
          >
            {topCoins.map(coin => (
              <TopCoin
                key={coin.id}
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
            padding='1rem'
            bg={['transparent', 'transparent', 'transparent', 'white']}
          >
            <HStack
              display={['none', 'none', 'none', 'flex']}
              width='780px'
              justifyContent='space-between'
              padding='0 2rem'
            >
              <Text>Moeda</Text>
              <Text>Preço</Text>
              <Text>Supply</Text>
              <Text>MarketCap</Text>
            </HStack>
            {dailyCoins.map(coin => (
              <DailyCoin
                key={coin.id}
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
          onPageChange={setPage}
          totalCountOfRegisters={ITEMS_PER_PAGE}
          totalCountOfPages={Number(returnedCoins.length / ITEMS_PER_PAGE)}
          currentPage={page}
        />
      </Flex>
    </>
  )
}

export const Home = memo(HomeComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.returnedCoins, nextProps.returnedCoins)
})

export const getStaticProps: GetStaticProps = async () => {

  const headers = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await fetch("https://coinranking1.p.rapidapi.com/coins", {
    headers,
  });
  const data = await response.json();
  //@ts-ignore
  //@ts-nocheck
  const { coins } = data.data;

  const returnedCoins = coins.map((coin) => {
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name.length > 12 ? coin.name.substring(0, 12).concat('...') : coin.name,
      price: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: coin.price >= 1 ? 2 : 6,
      }).format(coin.price),
      circulatingSupply: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      }).format(coin.circulatingSupply),
      volume: coin.volume,
      iconUrl: coin.iconUrl,
      rank: coin.rank,
      history: coin.history,
      marketCap: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(coin.marketCap),
    };
  });

  return {
    props: {
      returnedCoins
    },
    revalidate: 5
  }
}
