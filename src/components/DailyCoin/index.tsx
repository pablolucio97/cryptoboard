import { Flex, Text } from "@chakra-ui/react";

type DailyCoinProps = {
    id: number;
    symbol: string;
    name: string;
    price?: number
    circulatingSupply?: number
    volume?: number;
    iconUrl?: string;
    rank?: number;
    history?: number[];
    marketCap?: number;
}

export function DailyCoin({
    id,
    name,
    symbol,
    price,
    circulatingSupply,
    marketCap,
    iconUrl
}: DailyCoinProps) {
    return (
        <Flex
            id={String(id)}
            display='flex'
            flexDirection={['column', 'row', 'row', 'row']}
            bg='white'
            justifyContent={['center', 'center', 'center','flex-start']}
            alignItems={['center', 'center', 'center','flex-start']}
            width={["240px","400px","640px","880px"]}
            padding={["1rem",".24rem",".24rem",".24rem"]}
            borderRadius="4px"
            marginRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >

            <Text
                fontWeight='bold'
                fontSize=".8rem"
                width='240px'
                wordBreak='break-word'
                ml='4px'
            >
                <img
                    src={iconUrl}
                    alt="Cryptoboard"
                    width="24" height="24"
                    style={{ marginRight: '8px', marginBottom: '-8px' }}
                />
                {name} ({symbol})
            </Text>
            <Text
                fontSize=".88rem"
                width='240px'
                ml='6rem'
                color='gray'
                >
                {price}
            </Text>
            <Text
                fontSize=".88rem"
                width='240px'
                color='gray'
                mr='1.6rem'
                display={['none','none', 'none', 'flex']}
                >
                {circulatingSupply}
            </Text>
            <Text
                fontSize=".88rem"
                width='240px'
                color='gray'
                display={['none','none', 'none', 'flex']}
            >
                {marketCap}
            </Text>
        </Flex>
    )
}