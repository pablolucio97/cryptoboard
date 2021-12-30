import "@fontsource/poppins";

import React from "react";
import { MdMenu } from "react-icons/md";

import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { useSideBarDrawer } from "../../context/SidebarDrawerContext";
import { Logo } from "../Logo";

export function Header() {

    const { onOpen } = useSideBarDrawer()


    const isSmallDevice = useBreakpointValue({
        base: false,
        lg: true
    })

    if(!isSmallDevice) {
        
    return (
        <Flex
            display='flex'
            backgroundColor='black'
            color='yellow'
            height='64px'
            width='100vw'
        >
            <MdMenu 
            onClick={onOpen} 
            size={24}
            style={{
                cursor: 'pointer',
                margin: '1.48rem 2rem'

            }}
            
            />
            <Logo />
        </Flex>
    )
    }

    return (
        <Flex
            display='flex'
            backgroundColor='black'
            color='yellow'
            height='64px'
            width='100vw'

        >
            <Logo />
        </Flex>
    )
}