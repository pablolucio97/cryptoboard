import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import React, { FormEvent, useEffect, useState } from "react";
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

import { Alert } from "../components/Alert";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { api } from "../services/api";
import styles from "../styles/alertModalStyles.module.scss";
import { AlarmProps, CoinProps } from "../types/generalTypes";
import { formatCurrency } from "../utils/formats";
import { generateRandomId } from "../utils/generateRandomId";

export default function Alerts({ returnedCoins }) {

    const toast = useToast()

    const [session] = useSession()

    const [newAlarmModalOpen, setNewAlarmModalOpen] = useState(false)
    const [coins, setCoins] = useState<CoinProps[]>([])
    const [selectedCoin, setSelectedCoin] = useState('')
    const [selectedCoinImgUrl, setSelectedCoinImgUrl] = useState('')
    const [selectedCoinCurrentValue, setSelectedCoinCurrentValue] = useState(0)
    const [coinAlarmTargetValue, setCoinAlarmTargetValue] = useState(0)
    const [alarms, setAlarms] = useState<AlarmProps[]>([])

    useEffect(() => {
        setCoins([...returnedCoins])
    }, [])

    async function getAlarms() {
        const data = await api.get('/alarms')
        const { alarms } = data.data.alarms
        if (alarms) setAlarms(alarms)
    }

    useEffect(() => {
        getAlarms()
    }, [getAlarms, removeAlarm])

    function openModal() {
        setNewAlarmModalOpen(true)
    }

    function closeModal() {
        setCoinAlarmTargetValue(0)
        setSelectedCoin('')
        setNewAlarmModalOpen(false)
    }

    function getCurrentCoinValue(coinSymbol) {
        if (coinSymbol === 'Select') {
            return
        }
        const currentValue = coins.filter(coin => coin.symbol === coinSymbol)[0].price
        const coinIconURL = coins.filter(coin => coin.symbol === coinSymbol)[0].iconUrl
        console.log(coinIconURL)
        setSelectedCoinCurrentValue(currentValue)
        setSelectedCoinImgUrl(coinIconURL)
    }

    async function createNewAlarm(e: FormEvent) {

        e.preventDefault()
        const newAlarm = {
            id: generateRandomId(),
            coin: selectedCoin,
            targetValue: coinAlarmTargetValue,
            iconUrl: selectedCoinImgUrl,
            isActive: true
        }

        await api.post('/alarms', newAlarm)

        toast({
            title: 'Novo alarme',
            description: "Alarme adicionado com sucesso.",
            position: 'top',
            duration: 3000,
            isClosable: true
        })

        closeModal()
    }



    async function removeAlarm(id) {
        await api.delete('/alarms', { data: { id: id } })
        toast({
            description: "Alarme removido com sucesso.",
            position: 'top',
            duration: 3000,
            isClosable: true
        })
    }


    return (
        <>
            <Head>
                <title>CryptoBoard | Alertas</title>
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
                        content='Alertas'
                    />
                    <SubTitle
                        content='Meus alertas'
                    />
                    {
                        session ?

                            alarms.length > 0 ?
                                alarms.map(alarm => (
                                    <Alert
                                        id={alarm.id}
                                        coin={alarm.coin}
                                        iconUrl={alarm.iconUrl}
                                        targetValue={alarm.targetValue}
                                        isActive={alarm.isActive}
                                        removeAlarm={() => removeAlarm(alarm.id)}
                                    />
                                )) :
                                <Box
                                    display="flex"
                                    justifyContent='center'
                                    alignItems='center'
                                    width="900px"
                                    height="300px"
                                    bg='white'
                                    padding='1rem'
                                >
                                    <SubTitle
                                        content='Você ainda não adicionou nenhum alarme'
                                    />
                                </Box>
                            :
                            <Box
                                display="flex"
                                justifyContent='center'
                                alignItems='center'
                                width="900px"
                                height="300px"
                                bg='white'
                                padding='1rem'
                            >
                                <SubTitle
                                    content='Faça login para criar alarmes'
                                />
                            </Box>

                    }
                </VStack>
                <VStack
                    display="flex"
                    flexDirection='column'
                    alignItems='flex-start'
                    width='720px'
                    padding='.8rem'
                >
                    <Title
                        content='Alertas'
                    />
                    <SubTitle
                        content='Meus alertas'
                    />
                    <PrimaryButton
                        label='Novo alerta'
                        action={openModal}
                        type='button'
                        disabled={!session}
                    />
                </VStack>
            </Flex>
            <Modal
                isOpen={newAlarmModalOpen}
                onRequestClose={closeModal}
                className={styles.activemodal}
                overlayClassName={styles.reactModalOverlay}
            >
                <strong>Novo alarme</strong>
                <form onSubmit={createNewAlarm}>
                    <Text>Moeda</Text>
                    <Select
                        onChange={(e) => { setSelectedCoin(e.target.value), getCurrentCoinValue(e.target.value) }}
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
                        {selectedCoin !== '' && (
                            <img
                                src={selectedCoinImgUrl}
                                width="24" height="24"
                            />
                        )}
                        <Text
                            color='gray'
                        >
                            {selectedCoin}
                        </Text>
                    </HStack>
                    <Text>Valor atual: {selectedCoinCurrentValue}</Text>
                    <Text>Valor alvo (USD)</Text>
                    <input type="text"
                        placeholder='$'
                        onChange={(e) => { setCoinAlarmTargetValue(Number(e.target.value)) }}
                        min={0}
                        max={1000}
                        required
                        maxLength={10}
                    />
                    <HStack
                        mt='1rem'
                    >
                        <PrimaryButton
                            label='Salvar'
                            action={() => createNewAlarm}
                            type='submit'
                        />
                        <SecondaryButton
                            label='Cancelar'
                            action={closeModal}
                        />
                    </HStack>
                </form>

            </Modal>

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
            price: formatCurrency(coin.price)
        }
    })

    return {
        props: {
            returnedCoins
        }
    }
}