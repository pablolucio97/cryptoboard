import "@fontsource/poppins";

import React from "react";

import { Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";

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
            <Logo />
        </Flex>
    )
}