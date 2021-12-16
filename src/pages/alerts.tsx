import React, { useState } from 'react'
import Head from 'next/head'
import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    VStack,
    HStack,
    Text,
    Select
} from '@chakra-ui/react'
import { Title } from '../components/Title'
import { SubTitle } from '../components/SubTitle'
import { Alert } from '../components/Alert'
import { PrimaryButton } from '../components/PrimaryButton'
import Modal from 'react-modal'
import { SecondaryButton } from '../components/SecondaryButton'
import styles from '../styles/modalStyles.module.scss'

export default function Alerts() {

    const [newAlarmModalOpen, setNewAlarmModalOpen] = useState(false)

    function openModal() {
        setNewAlarmModalOpen(true)
    }

    function closeModal() {
        setNewAlarmModalOpen(false)
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
                    <Alert />
                    <Alert />
                    <Alert />
                    <Alert />
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
                <Text>Moeda</Text>
                <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Text>Valor alvo (USD)</Text>
                <NumberInput
                    onChange={() => { }}
                    min={0.1}
                    max={1000}
                    size='sm'
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <HStack
                    mt='1rem'
                >
                    <PrimaryButton
                        label='Salvar'
                        action={openModal}
                    />
                    <SecondaryButton
                        label='Cancelar'
                        action={closeModal}
                    />
                </HStack>
            </Modal>
        </>
    )
}