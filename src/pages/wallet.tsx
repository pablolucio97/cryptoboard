import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import React, { FormEvent, useEffect, useMemo, useState } from "react";
import Modal from "react-modal";

import {
  Box,
  Flex,
  HStack,
  Select,
  Text,
  useToast,
  VStack
} from "@chakra-ui/react";

import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { WalletComponent } from "../components/Wallet";
import { WalletCoin } from "../components/WalletCoin";
import { api } from "../services/api";
import buyCoinModalStyle from "../styles/buyCoinModalStyles.module.scss";
import { WalletCoins } from "../types/generalTypes";
import { formatCurrency, formatDate } from "../utils/formats";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

export default function Wallet({ returnedCoins }) {

    const toast = useToast()
    const session = useSession()

    const [buyCoinModal, setBuyCoinModal] = useState(false)
    const [selectedCoin, setSelectedCoin] = useState('')
    const [selectedCoinImgUrl, setSelectedCoinImgUrl] = useState('')
    const [selectedCoinCurrentValue, setSelectedCoinCurrentValue] = useState(0)
    const [coins, setCoins] = useState(returnedCoins)
    const [valueToInvest, setValueToInvest] = useState(0)
    const [coinQuanityPreview, setCoinQuanityPreview] = useState(0)
    const [walletCoins, setWalletCoins] = useState<WalletCoins[]>([])
    const [incomes, setIncomes] = useState([])

    //BUY CRYPTO MODAL

    function openBuyCoinModal() {
        setBuyCoinModal(true)
    }

    function closeBuyCoinModal() {
        setBuyCoinModal(false)
    }

    //INPUT CHANGES

    function calcPreviewCoinQuantity(coinSymbol) {
        if (coinSymbol === '') {
            return
        }
        const currentValue = coins.filter(coin => coin.symbol === coinSymbol)[0].price
        const coinIconURL = coins.filter(coin => coin.symbol === coinSymbol)[0].iconUrl
        const formatCurrentValue = Number(currentValue)

        const coinsPreview = formatCurrentValue > 0 ?
            Number(Number(valueToInvest / currentValue).toFixed(4))
            :
            Number(Number(valueToInvest / currentValue).toFixed(6))

        setSelectedCoinCurrentValue(currentValue)
        setSelectedCoinImgUrl(coinIconURL)
        setCoinQuanityPreview(coinsPreview)
    }

    //CRYPTOS DB

    async function fetchCryptos() {
        const data = await api.get('/wallet')
        const { cryptos } = data.data.data
        const sortedCryptos: WalletCoins[] = cryptos.sort((a, b) => {
            if (a.investedValue > b.investedValue) return -1
            if (a.investedValue < b.investedValue) return 1
            return 0
        })
        if (cryptos) setWalletCoins(sortedCryptos)
    }


    async function buyCrypto(e: FormEvent) {
        e.preventDefault()
        if (selectedCoin === '' || selectedCoin === 'Selecione uma moeda') {
            return
        }

        if (walletCoins.length >= 15) {
            toast({
                title: 'Compra de moeda',
                description: "Você atingiu o limite máximo de 15 criptomeodas na carteira. Para comprar uma nova criptomoeda remova uma outra criptomoeda da carteira.",
                status: 'warning',
                position: 'top',
                duration: 5000,
                isClosable: true
            })
            return
        }

        const newCrypto = {
            id: String(Number(Math.random() * 1000).toFixed(0)),
            symbol: selectedCoin,
            iconUrl: selectedCoinImgUrl,
            quantity: coinQuanityPreview,
            valueInBuyDate: selectedCoinCurrentValue,
            buyDate: formatDate(),
            investedValue: valueToInvest,
        }

        await api.post('/wallet', newCrypto).then(() => closeBuyCoinModal())
        toast({
            title: 'Compra de moeda',
            description: "Compra realizada com sucesso.",
            position: 'top',
            duration: 3000,
            isClosable: true
        })
    }

    async function removeCrypto(id) {
        await api.delete('/wallet', { data: { id: id } }).then(
            () => {
                toast({
                    title: 'Remoção de moeda',
                    description: "Moeda removida da carteira.",
                    position: 'top',
                    duration: 3000,
                    isClosable: true
                })
            }
        )
    }

    //UPDATE CRYPTOS VALUE AND CALC WALLET BRIEFING


    function getUpdatedCoinValue(coinInWallet: string) {
        const updatedCoinValue = coins.filter(coin => coin.symbol === coinInWallet)
        return updatedCoinValue[0].price
    }

    function calcIncome(coinInWallet: string) {
        const updatedValue = Number(getUpdatedCoinValue(coinInWallet))
        const filterValues = walletCoins.filter(coin => coin.symbol === coinInWallet)
        const quantityBought = Number(filterValues[0].quantity)
        const valueInBuyDate = Number(filterValues[0].valueInBuyDate)
        const difference = Number(Number((updatedValue * quantityBought) - (valueInBuyDate * quantityBought)).toFixed(2))
        return Number(difference)
    }

    const calcTotalInvested = useMemo(() => {
        const total = walletCoins.reduce((acc, coin) => acc + coin.investedValue, 0)
        return total
    }, [walletCoins])



    useEffect(() => {
        fetchCryptos()
    }, [walletCoins])

    useEffect(() => {
        calcPreviewCoinQuantity(selectedCoin)
    }, [valueToInvest])

    //CHART DATA

    const coinsChartValue = walletCoins.map(coin => coin.investedValue)
    const coinsChartName = walletCoins.map(coin => coin.symbol)

    var options = {
        labels: coinsChartName,
        series: coinsChartValue,
        chart: {
            width: 320,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
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
                <title>CryptoBoard | Carteira</title>
            </Head>
            <Flex
                display="flex"
                flexDirection='column'
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
                    mb='1rem'
                >
                    <Title
                        content="Carteira"
                    />
                    <SubTitle
                        content="Minhas criptomoedas"
                    />
                    <WalletComponent>
                        {

                            walletCoins.length > 0 ?
                                walletCoins.map(coin => (
                                    <WalletCoin
                                        id={coin.id}
                                        iconUrl={coin.iconUrl}
                                        symbol={coin.symbol}
                                        quantity={coin.quantity}
                                        buyDate={coin.buyDate}
                                        valueInBuyDate={coin.valueInBuyDate}
                                        investedValue={coin.investedValue}
                                        updatedValue={getUpdatedCoinValue(coin.symbol)}
                                        difference={calcIncome(coin.symbol)}
                                        removeCrypto={() => removeCrypto(coin.id)}
                                    />
                                ))

                                :

                                <Box
                                    marginBottom='8rem'
                                    height='320px'
                                    display='flex'
                                    alignItems='center'
                                    color='gray'
                                >
                                    <Text>Sua carteira ainda está vazia.</Text>
                                </Box>



                        }
                    </WalletComponent>
                    <PrimaryButton
                        label="Adicionar moeda"
                        action={openBuyCoinModal}
                        size="md"
                        disabled={!session}
                        type="button"
                    />
                    {session ? (
                        <>
                            <Title
                                content="Resumo"
                            />
                            <SubTitle
                                content="Informações resumidas da carteira"
                            />
                            <VStack
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width="1200px"
                                backgroundColor='white'
                                padding='1rem'
                            >

                                <Text
                                    marginBottom='4px'
                                    fontWeight='500'
                                    color='gray'
                                >
                                    Total investido: {formatCurrency(calcTotalInvested)}
                                </Text>
                                <Text
                                    fontWeight='500'
                                    color='gray'
                                >
                                    Total de ativos: {walletCoins.length}/15
                                </Text>
                                <Chart
                                    type='donut'
                                    //@ts-ignore
                                    options={options}
                                    height="300px"
                                    series={options.series}
                                />
                            </VStack></>
                    ) :
                        <Text>Faça login para ter acesso à sua carteira.</Text>
                    }
                </VStack>
                <Modal
                    isOpen={buyCoinModal}
                    onRequestClose={closeBuyCoinModal}
                    className={buyCoinModalStyle.activemodal}
                    overlayClassName={buyCoinModalStyle.reactModalOverlay}
                >
                    <strong>Adicionar moeda</strong>
                    <form onSubmit={buyCrypto}>
                        <Text>Moeda</Text>
                        <Select
                            placeholder='Selecione uma moeda'
                            onChange={(e) => { setSelectedCoin(e.target.value), calcPreviewCoinQuantity(e.target.value) }}
                        >
                            {coins.map(coin => (
                                <option key={coin.id} value={coin.symbol}>{coin.symbol}</option>
                            ))}
                        </Select>
                        <HStack
                            display="flex"
                            width='48px'
                            alignItems="center"
                            padding='1rem'
                        >
                        </HStack>
                        {selectedCoin !== '' &&
                            (
                                <HStack
                                    display='flex'
                                >
                                    <img
                                        src={selectedCoinImgUrl}
                                        width="24" height="24" />
                                    <Text>{selectedCoin}.</Text>
                                </HStack>
                            )
                        }
                        <Text>Valor de compra ($)</Text>
                        <input type="number"
                            min={0}
                            max={1000}
                            required
                            maxLength={10}
                            value={valueToInvest}
                            onChange={(e) => { setValueToInvest(e.target.valueAsNumber) }}
                        />
                        {valueToInvest > 0 &&
                            <Text>Previsão: {coinQuanityPreview} {selectedCoin}'s</Text>
                        }
                        <HStack
                            mt='1rem'
                        >
                            <PrimaryButton
                                label='Confirmar'
                                action={() => buyCrypto}
                                type='submit'
                            />
                            <SecondaryButton
                                label='Cancelar'
                                action={() => closeBuyCoinModal()}
                            />
                        </HStack>
                    </form>

                </Modal>
            </Flex>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const headers = {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

    const response = await fetch('https://coinranking1.p.rapidapi.com/coins', {
        headers
    })

    const { data } = await response.json()
    const coins = data.coins

    const returnedCoins = coins.map(coin => {
        return {
            id: coin.id,
            symbol: coin.symbol.toUpperCase(),
            iconUrl: coin.iconUrl,
            price: coin.price
        }
    })
    return {
        props: {
            returnedCoins
        }
    }
}
