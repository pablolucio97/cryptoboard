import { Box, Flex, Text } from "@chakra-ui/react";

import { Logo } from "../Logo";

export function Footer() {
    return (
        <Flex
            display='flex'
            backgroundColor='black'
            justifyContent='space-around'
            alignItems='center'
            color='yellow'
            width='100vw'
            height='240px'
            padding='0 4rem'
        >
            <Box>
                <Text
                    color='white'
                    fontSize='16px'
                    >
                    © 2022 CryptoBoard. All rights reserved
                </Text>
                <Text
                    color='gray'
                    fontSize='12px'
                    marginTop='-16px'
                >
                    Desenvolvido por <a href="https://www.linkedin.com/in/pablo-silva-76b521156/">Pablo Silva</a>
                </Text>
            </Box>
            <Logo />
        </Flex>
    )
}