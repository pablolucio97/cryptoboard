import { MdDelete } from "react-icons/md";

import { Flex, Text } from "@chakra-ui/react";

import { WalletCoins } from "../../types/generalTypes";
import { formatCrypto, formatCurrency } from "../../utils/formats";

export function WalletCoin({
    id,
    symbol,
    iconUrl,
    quantity,
    valueInBuyDate,
    updatedValue,
    buyDate,
    investedValue,
    difference,
    removeCrypto
}: WalletCoins) {
    return (
        <Flex
            display='flex'
            key={id}
            flexDirection={['column', 'column', 'column', 'row']}
            justifyContent={['center', 'center', 'center', 'flex-start']}
            alignItems={['center', 'center', 'center', 'flex-start']}
            width={["240px", "420px", "640px", "1040px"]}
            padding="1rem"
            bg='white'
            borderRadius="4px"
            marginRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >
            <img
                src={iconUrl}
                alt="Cryptoboard"
                width="24" height="24"
            />
            <Text
                marginLeft={['0', '0', '0', "8px"]}
                fontWeight='bold'
                fontSize=".88rem"
                width={['','','','120px']}
                textAlign='start'
            >
                {symbol}
            </Text>
            <Text
                marginLeft={['0', '0', '0', "-24px"]}
                fontSize=".88rem"
                width={['','','','144px']}
                textAlign='start'
            >
                {formatCrypto(quantity)}
            </Text>
            <Text
                width={['','','','180px']}
                textAlign='start'
                fontSize=".88rem"
            >
                {formatCurrency(valueInBuyDate)}
            </Text>
            <Text
                fontSize=".88rem"
                width={['','','','140px']}
                textAlign='start'
                marginLeft={['0', '0', '0', "32px"]}
            >
                {buyDate}

            </Text>
            <Text
                fontSize=".88rem"
                width={['','','','180px']}
                textAlign='center'
                marginLeft={['0', '0', '0', "12px"]}
            >
                {formatCurrency(investedValue)}
            </Text>
            <Text
                width={['','','','120px']}
                marginLeft={['0', '0', '0', "64px"]}
                textAlign='start'
                fontSize=".88rem"
            >
                {formatCurrency(updatedValue)}
            </Text>
            <Text
                width={['','','','120px']}
                marginLeft={['0', '0', '0', "44px"]}
                textAlign='start'
                fontSize=".88rem"
            >
                {formatCurrency(difference)}
            </Text>
            <Text
                onClick={removeCrypto}
                marginRigth="-24px"
                _hover={
                    {
                        cursor: 'pointer'
                    }
                }
            >
                <MdDelete
                    size={24}
                />
            </Text>
        </Flex>
    )
}