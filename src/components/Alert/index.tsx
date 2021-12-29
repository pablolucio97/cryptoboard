import { MdDelete } from "react-icons/md";

import { HStack, Text, VStack } from "@chakra-ui/react";

type AlarmProps = {
    id: string;
    coin: string;
    iconUrl: string;
    targetValue: number;
    isActive: boolean;
    removeAlarm?: () => void;
}

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
            justifyContent='space-between'
            width="90%"
            bg='white'
            padding=' 0 2.4rem'
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
            <MdDelete
                onClick={removeAlarm}
                size={32}
                style={{cursor: 'pointer'}}
            />
          
        </HStack>
    )
}