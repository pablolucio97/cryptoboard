import { HStack, Text, VStack } from "@chakra-ui/react";
import Switch from 'react-switch'

import { SecondaryButton } from '../SecondaryButton'

export function Alert() {
    return (
        <HStack
            display='flex'
            justifyContent='space-evenly'
            width="720px"
            bg='white'
            padding='1rem'
        >
            <VStack
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                padding='1rem'
            >
                <Text
                    fontSize='.88rem'
                    fontWeight='bold'
                >Moeda
                </Text>
                <Text
                    fontSize='.88rem'
                >Bitcoin
                </Text>
            </VStack>
            <VStack
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Text
                    fontSize='.88rem'
                    fontWeight='bold'
                >Valor alvo
                </Text>
                <Text
                    fontSize='.88rem'
                >$7,543
                </Text>
            </VStack>
            <VStack
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Text
                    fontSize='.88rem'
                    fontWeight='bold'
                >Status do alarme</Text>
                <Text
                    fontSize='.88rem'
                >Ativo</Text>
            </VStack>
            <Switch
                checked={false}
                onChange={() => { }}
            />
            <SecondaryButton
                label='Remover alarme'
                action={() => { }}
            />
        </HStack>
    )
}