import React, { ReactNode } from "react";
import { Flex, VStack } from '@chakra-ui/react'

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Menu } from '../Menu'


type LayoutProps = {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <VStack
            display="flex"
            justifyContent='flex-start'
            alignItems='flex-start'
        >
            <Header />
            <Flex>
                <Menu />
                {children}
            </Flex>
            <Footer />
        </VStack>
    )
}
