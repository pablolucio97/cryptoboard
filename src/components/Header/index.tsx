import "@fontsource/poppins";

import React from "react";
import { MdAttachMoney } from "react-icons/md";

import { Box, Flex, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            display='flex'
            backgroundColor='black'
            color='yellow'
            height='64px'
            position='fixed'
            width='100vw'
        >
            <Text
                display='flex'
                alignItems='center'
                fontWeight='500'
                fontSize={18}
                fontFamily='Poppins, sans-serif'
            >

                <Box
                    display='flex'
                    align='center'
                    justify-content='center'
                    backgroundColor='yellow'
                    borderRadius='100%'
                    margin='0 .48rem 0 1.64rem'
                    width='32px'
                    height='32px'
                    color='gray'
                >
                    <MdAttachMoney
                        size='32'
                    />
                </Box>
                CryptoBoard
            </Text>
        </Flex>
    )
}