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
            direction={['column', 'column', 'row', 'row']}
            justify='space-around'
            alignItems='center'
            width={["240px","400px","640px","266px"]}
            height={['120px', '120px', '40px', '40px']}
            backgroundColor='white'
            padding="1rem"
           // borderBottom={['1px solid gray', '1px solid gray', 'none']}
            borderRadius="4px"
            margin={['0 -.48rem 0 0','0 -.48rem 0 0','0 -.48rem 0 0','0']}
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