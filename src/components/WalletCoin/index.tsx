import { Flex, Text } from '@chakra-ui/react'
import {WalletCoins} from '../../types/coins'



export function WalletCoin({
    id,
    coin,
    iconUrl,
    quantity,
    valueInBuyDate,
    updatedValue,
    buyDate,
    investedValue,
    updatedInvestedValue
} : WalletCoins) {
    return (
        <Flex
            display='flex'
            key={id}
            justify='space-evenly'
            alignItems='center'
            width="96%"
            padding=".24rem"
            borderRadius="4px"
            margiRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >
            <img
                src={iconUrl}
                alt="Cryptoboard"
                width="24" height="24"
            />
            <Text
                marginLeft="-12px"
                fontWeight='bold'
                fontSize=".88rem"
                >
                {coin}
            </Text>
            <Text
                fontSize=".88rem"
            >
                {quantity}
            </Text>
            <Text
                fontSize=".88rem"
            >
                {valueInBuyDate}
            </Text>
            <Text
                fontSize=".88rem"
            >
                {updatedValue}
            </Text>
            <Text
                fontSize=".88rem"
            >
                {buyDate}

            </Text>
            <Text
                fontSize=".88rem"
            >
                {investedValue}
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
               {updatedInvestedValue}
            </Text>
        </Flex>
    )
}