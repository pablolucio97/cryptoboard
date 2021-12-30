import { Flex, Text } from "@chakra-ui/react";

type TopCoinProps = {
    id: number;
    symbol: string;
    name: string;
    price?: number
    circulatingSupply?: number
    volume?: number;
    iconUrl?: string;
    rank?: number;
    history?: number[];
}

export function TopCoin({
    id,
    symbol,
    name,
    history,
    iconUrl
}: TopCoinProps) {
    return (
        <Flex
            key={id}
            display='flex'
            direction={['column', 'row']}
            justify='space-around'
            alignItems='center'
            width="266px"
            backgroundColor={['red', 'white']}
            padding="1rem"
            borderRadius="4px"
            margiRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >
            <img
                src={iconUrl}
                alt="Cryptoboard"
                width="24" height="24"
            />
            <Text>{name}</Text>
            <Text
                fontSize='.8rem'
                fontWeight='bold'
            >
                {symbol}
            </Text>
        </Flex>
    )
}