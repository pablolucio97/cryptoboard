import { Flex, Text } from '@chakra-ui/react'

export function WalletCoin() {
    return (
        <Flex
            display='flex'
            justify='space-evenly'
            alignItems='center'
            width="96%"
            padding=".24rem"
            borderRadius="4px"
            margiRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                alt="Cryptoboard"
                width="24" height="24"
            />
            <Text
                marginLeft="-12px"
                fontWeight='bold'
                fontSize=".88rem"
                >
                Bitcoin
            </Text>
            <Text
                fontSize=".88rem"
            >
                0,002313
            </Text>
            <Text
                fontSize=".88rem"
            >
                $48,356
            </Text>
            <Text
                fontSize=".88rem"
            >
                $62,878
            </Text>
            <Text
                fontSize=".88rem"
            >
                12/12/2021

            </Text>
            <Text
                fontSize=".88rem"
            >
                $55
            </Text>
            <Text
                color='green'
                fontSize=".88rem"
            >
                $61
            </Text>
            <Text
                color='green'
                fontSize=".88rem"
            >
                +12.04%
            </Text>
        </Flex>
    )
}