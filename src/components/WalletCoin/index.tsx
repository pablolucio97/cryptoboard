import { Flex, Text } from "@chakra-ui/react";

import { WalletCoins } from "../../types/generalTypes";
import { formatCrypto, formatCurrency } from "../../utils/formats";

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
}: WalletCoins) {
    return (
        <Flex
            display='flex'
            key={id}
            justify='flex-start'
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
                style={{
                    marginLeft:'12px'
                }}
            />
            <Text
                marginLeft="8px"
                fontWeight='bold'
                fontSize=".88rem"
                width='120px'
                textAlign='start'
            >
                {coin}
            </Text>
            <Text
                marginLeft="-24px"
                fontSize=".88rem"
                width='180px'
                textAlign='start'
            >
                {formatCrypto(quantity)}
            </Text>
            <Text
                width='180px'
                textAlign='start'
                fontSize=".88rem"
            >
                {formatCurrency(valueInBuyDate)}
            </Text>
            <Text
                fontSize=".88rem"
                width='140px'
                textAlign='start'
                marginLeft="32px"
                >
                {buyDate}

            </Text>
            <Text
                width='120px'
                marginLeft="64px"
                textAlign='start'
                fontSize=".88rem"
                >
                {formatCurrency(updatedValue)}
            </Text>
            <Text
                fontSize=".88rem"
                width='180px'
                textAlign='center'
                marginLeft="12px"
            >
                {formatCurrency(investedValue)}
            </Text>

            <Text
                color='green'
                fontSize=".88rem"
                width='180px'
                textAlign='center'
            >
                {updatedInvestedValue}
            </Text>
        </Flex>
    )
}