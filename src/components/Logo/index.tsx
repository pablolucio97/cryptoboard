import { MdAttachMoney } from "react-icons/md";

import { Box, Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            display='flex'
            alignItems='center'
            fontWeight='500'
            fontSize={18}
            fontFamily='Poppins, sans-serif'
            ml='-.48rem'
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
    )
}