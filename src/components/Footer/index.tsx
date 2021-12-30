import { Box, Flex, Text } from "@chakra-ui/react";

import { Logo } from "../Logo";

export function Footer() {
    return (
        <Flex
            display='flex'
            flexDirection={['column', 'column', 'row']}
            backgroundColor='black'
            justifyContent={['center', 'space-around', 'space-around']}
            alignItems='center'
            color='yellow'
            width='100vw'
            height='240px'
            padding={['0', '0 4rem', '0 4rem']}
        >
            <Box>
                <Text
                    color='white'
                    fontSize={['12px','16px','16px']}
                    mr={['0', '6rem', '2rem']}
                >
                    © 2022 CryptoBoard. All rights reserved
                </Text>
                <Text
                    color='gray'
                    fontSize={['8px','12px','12px']}
                    marginTop='-16px'
                >
                    Desenvolvido por <a href="https://www.linkedin.com/in/pablo-silva-76b521156/">Pablo Silva</a>
                </Text>
            </Box>
            <Logo />
        </Flex>
    )
}