
import React, { ReactNode } from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react";

import { PrimaryButton } from "../../components/PrimaryButton";
import { useSideBarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarNav } from "./SideBarNav";

type ChildrenProps = {
    children: ReactNode
}

export function SideBar({ children }: ChildrenProps) {

    const { isOpen, onClose } = useSideBarDrawer()

    const hasDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (hasDrawerSidebar) {
        return (<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay
            >
                <DrawerContent bg='gray.800' p='4'>
                    <DrawerCloseButton
                        mt='6'
                        border='none'
                        cursor='pointer'
                    />
                    <DrawerBody
                    >

                        <SidebarNav>
                            {children}
                        </SidebarNav>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>)
    }

    return (
        <Box
            as='aside'
            w='64'
            mr='8'
        >
            <SidebarNav>
                {children}
            </SidebarNav>
        </Box>
    )
}