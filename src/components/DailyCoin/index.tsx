import { Flex, Text } from "@chakra-ui/react";

export function DailyCoin() {
    return (
        <Flex
            display='flex'
            justify='space-around'
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
                $48,356.43
            </Text>
            <Text
                color='red'
                fontSize=".88rem"
            >
                -0.23%
            </Text>
            <Text
                color='green'
                fontSize=".88rem"
            >
                +0.11%
            </Text>
            <Text
                fontSize=".88rem"
            >
                18,897,868
            </Text>
            <Text
                fontSize=".88rem"
            >
                $916,649,339,413
            </Text>
        </Flex>
    )
}