import { HStack, Text, VStack } from "@chakra-ui/react";

type AlarmProps = {
    id: string;
    coin: string;
    iconUrl: string;
    targetValue: number;
    isActive: boolean;
    removeAlarm?: () => void;
}

import { SecondaryButton } from '../SecondaryButton'

export function Alert({
    id,
    coin,
    targetValue,
    isActive,
    removeAlarm,
    iconUrl
}: AlarmProps) {
    return (
        <HStack
            display='flex'
            justifyContent='space-evenly'
            width="720px"
            bg='white'
            padding='.32rem'
            key={id}
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
                    mb='8px'
                >
                    {coin}
                </Text>
                <img
                    src={iconUrl}
                    width="24" height="24"
                />
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
                >
                    Valor alvo
                </Text>
                <Text
                    fontSize='.88rem'
                >
                    {Intl.NumberFormat('en-US', {
                        currency: 'USD',
                        style: 'currency',
                        maximumFractionDigits: targetValue >= 1 ? 2 : 6
                    }).format(targetValue)}
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
                >
                    Status do alarme
                </Text>
                <Text
                    fontSize='.88rem'
                >
                    {isActive ? 'Ativado' : 'Desativado'}
                </Text>
            </VStack>
            <SecondaryButton
                label='Remover alarme'
                action={removeAlarm}
            />
        </HStack>
    )
}