import Head from "next/head";
import React from "react";
import { Flex, VStack, HStack, Text } from '@chakra-ui/react'
import { Title } from '../components/Title'
import { SubTitle } from '../components/SubTitle'
import { WalletCoin } from '../components/WalletCoin'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

export default function Wallet() {

    const coinsValue = [44, 15, 13, 33]
    const coinsName = ['Bitcoin', 'Ethereum', 'The Graph', 'Decentraland']


    var options = {
        labels: coinsName,
        series: coinsValue,
        chart: {
        width: 320,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
      };

  
    return (
        <>
            <Head>
                <title>CryptoBoard | Mercado</title>
            </Head>
            <Flex
                display="flex"
                flexDirection='column'
                alignSelf='center'
                width="90vw"
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
                        content="Carteira"
                    />
                    <SubTitle
                        content="Minhas criptomoedas"
                    />
                    <VStack
                        width="1200px"
                        backgroundColor='white'
                        padding='1rem'
                    >
                        <HStack
                            display="flex"
                            alignItems="center"
                            justifyContent="space-evenly"
                            paddingLeft="4rem"
                            width="100%"
                        >
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                marginLeft='2.48rem'
                                width='40px'
                                wordBreak='break-word'
                            >
                                Moeda
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                wordBreak='break-word'
                            >
                                Quantidade
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                width='80px'
                                wordBreak='break-word'
                            >
                                Valor na data da compra
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                wordBreak='break-word'
                            >
                                Valor atualizado
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                marginLeft='3rem'
                                width='60px'
                                wordBreak='break-word'
                            >
                                Data da compra
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                width='60px'
                                wordBreak='break-word'
                            >
                                Valor investido
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                width='60px'
                                wordBreak='break-word'
                            >
                                Valor investido atualizado
                            </Text>
                            <Text
                                color='black'
                                fontWeight='800'
                                textAlign='center'
                                fontSize='.64rem'
                                width='80px'
                                wordBreak='break-word'
                                marginRight='2rem'
                            >
                                Porcentagem de perda/ganho
                            </Text>
                        </HStack>
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                        <WalletCoin />
                    </VStack>
                    <Title
                        content="Resumo"
                    />
                    <SubTitle
                        content="Informações resumidas da carteira"
                    />
                    <VStack
                        display="flex"
                        flex-direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        width="1200px"
                        backgroundColor='white'
                        padding='1rem'
                    >
                        <Text
                            marginBottom='4px'
                            fontWeight='500'
                        >
                            Total investido: $3.657,00
                        </Text>
                        <Text
                            fontWeight='500'
                        >
                            Total de ativos: 4
                        </Text>
                        <Text
                            fontWeight='500'
                        >
                            Valor do lucro total: $23.657,88
                        </Text>
                        <Chart
                            type='donut'
                            //@ts-ignore
                            options={options}
                            height="300px"
                            series={options.series}
                        />
                    </VStack>
                </VStack>
            </Flex>
        </>
    )
}
