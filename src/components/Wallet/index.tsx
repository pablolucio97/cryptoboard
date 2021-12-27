import { ReactNode } from "react";

import { HStack, Text, VStack } from "@chakra-ui/react";

import { SubTitle } from "../SubTitle";
import { Title } from "../Title";

type WalletProps = {
    children: ReactNode
}

export function WalletComponent({ children }: WalletProps) {
    return (
        <>

            <VStack
                width="1200px"
                backgroundColor='white'
                padding='1rem'
                height="400px"
                overflowY='scroll'
            >
                <HStack
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    width="100%"
                >
                    <Text
                        fontWeight='800'
                        fontSize='.72rem'
                        marginLeft='32px'
                        marginRight='8px'
                    >
                        Moeda
                    </Text>
                    <Text
                        fontWeight='800'
                        fontSize='.72rem'
                        width='180px'
                        textAlign='center'
                    >
                        Quantidade
                    </Text>
                    <Text
                        fontWeight='800'
                        width='180px'
                        textAlign='center'
                        fontSize='.72rem'
                    >
                        Valor na data da compra
                    </Text>
                    <Text
                        fontWeight='800'
                        fontSize='.72rem'
                        width='180px'
                        textAlign='center'
                        wordBreak='break-word'
                    >
                        Data da compra
                    </Text>

                    <Text
                        fontWeight='800'
                        textAlign='center'
                        fontSize='.72rem'
                        width='180px'
                        wordBreak='break-word'
                    >
                        Valor investido
                    </Text>
                    <Text
                        color='black'
                        fontWeight='800'
                        textAlign='center'
                        fontSize='.72rem'
                        width='180px'
                        wordBreak='break-word'
                    >
                        Valor atualizado
                    </Text>
                    <Text
                        fontWeight='800'
                        fontSize='.72rem'
                        textAlign='center'
                        width='126px'
                        wordBreak='break-word'
                    >
                        Diferença
                    </Text>
                </HStack>
                {children}
            </VStack>
        </>
    )
}