import { HStack, Text, VStack } from "@chakra-ui/react";
import Switch from 'react-switch'

type AlarmProps = {
    coin: string;
    targetValue: number;
    isActive: boolean;
    alterAlarmStatus?: () => void;
    removeAlarm?: () => void;
}

import { SecondaryButton } from '../SecondaryButton'

export function Alert({ coin, targetValue, isActive, removeAlarm, alterAlarmStatus }: AlarmProps) {
    return (
        <HStack
            display='flex'
            justifyContent='space-evenly'
            width="720px"
            bg='white'
            padding='.32rem'
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
                >{coin}
                </Text>
                <Text
                    fontSize='.88rem'
                >
                    {coin}
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
                    Valor alvo
                </Text>
                <Text
                    fontSize='.88rem'
                >
                    {targetValue}
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
                    {isActive? 'Ativado' : 'Desativado'}
                </Text>
            </VStack>
            <Switch
                checked={isActive}
                onChange={alterAlarmStatus}
            />
            <SecondaryButton
                label='Remover alarme'
                action={removeAlarm}
            />
        </HStack>
    )
}