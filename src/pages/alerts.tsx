import React from 'react'
import { Flex, HStack, VStack } from '@chakra-ui/react'
import { Title } from '../components/Title'
import { SubTitle } from '../components/SubTitle'
import { Alert } from '../components/Alert'

export default function Alerts() {
    return (
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
        </Flex>
    )
}