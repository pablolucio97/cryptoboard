import {
    Flex, HStack, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper, Select, Text, VStack
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FormEvent, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Alert } from '../components/Alert'
import { PrimaryButton } from '../components/PrimaryButton'
import { SecondaryButton } from '../components/SecondaryButton'
import { SubTitle } from '../components/SubTitle'
import { Title } from '../components/Title'
import styles from '../styles/modalStyles.module.scss'


type CoinsProps = {
    id: string;
    symbol?: string;
    current_price?: number;
}

type AlarmProps = {
    coin: string;
    targetValue: number;
    isActive: boolean;
    removeAlarm?: () => void;
}

export default function Alerts({ returnedCoins }) {


    const [newAlarmModalOpen, setNewAlarmModalOpen] = useState(false)
    const [coins, setCoins] = useState<CoinsProps[]>([])
    const [selectedCoin, setSelectedCoin] = useState('')
    const [selectedCoinCurrentValue, setSelectedCoinCurrentValue] = useState(0)
    const [coinAlarmTargetValue, setCoinAlarmTargetValue] = useState(0)
    const [alarms, setAlarms] = useState<AlarmProps[]>([])

    useEffect(() => {
        setCoins([...returnedCoins])
    }, [])

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
        const currentValue = coins.filter(coin => coin.symbol === coinSymbol)[0].current_price
        setSelectedCoinCurrentValue(currentValue)
    }

    function createNewAlarm(e: FormEvent) {
        e.preventDefault()
        const newAlarm = {
            coin: selectedCoin,
            targetValue: coinAlarmTargetValue,
            isActive: true
        }
        alarms.push(newAlarm)
        closeModal()
    }

    function alterAlarmStatus(coin){
        const disabledAlarms = alarms.map(alarm => 
            alarm.coin === coin ?
            {
                ...alarms,
                coin: alarm.coin,
                targetValue: alarm.targetValue,
                isActive: !alarm.isActive
            }
            :
            alarm
        )
        setAlarms(disabledAlarms)
    }


    function removeAlarm(coin){
        const filteredAlarms = alarms.filter(alarm => alarm.coin !== coin)
        setAlarms(filteredAlarms) 
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
                {alarms.map(alarm => (
                    <Alert 
                        coin={alarm.coin}
                        targetValue={alarm.targetValue}
                        isActive={alarm.isActive}
                        alterAlarmStatus={() => alterAlarmStatus(alarm.coin)}
                        removeAlarm={() => removeAlarm(alarm.coin)}
                    />
                ))}
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
                    <Title
                        content={selectedCoin}
                        size='small'
                    />
                    <Text>Valor atual: {selectedCoinCurrentValue}</Text>
                    <Text>Valor alvo (USD)</Text>
                    <input type="text"
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

    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eth&order=market_cap_desc&per_page=200&page=1&sparkline=false')
    const response = await data.json()
    const returnedCoins: CoinsProps[] = response.map(coin => {
        return {
            id: coin.id,
            symbol: coin.symbol.toUpperCase(),
            current_price: Intl.NumberFormat('en-US', {
                currency: 'USD',
                style: 'currency',
                maximumFractionDigits: 8,
                minimumFractionDigits: 6,
                minimumSignificantDigits: 6
            }).format(coin.current_price)
        }
    })
    return {
        props: {
            returnedCoins
        }
    }
}