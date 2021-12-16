import { Flex, Text } from "@chakra-ui/react";

export function TopCoin() {
    return (
        <Flex
            display='flex'
            justify='space-around'
            alignItems='center'
            width="266px"
            backgroundColor='white'
            padding="1rem"
            borderRadius="4px"
            margiRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                alt="Cryptoboard"
                width="24" height="24"
            />
            <Text>Bitcoin</Text>
            <Text>Btc</Text>
        </Flex>
    )
}