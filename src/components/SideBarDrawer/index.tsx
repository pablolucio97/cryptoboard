
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

import { useSideBarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarNav } from "./SideBarNav";

type ChildrenProps = {
    children: ReactNode
}

export function SideBar({ children }: ChildrenProps) {

    const { isOpen, onClose } = useSideBarDrawer()

    const hasDrawerSidebar = useBreakpointValue({
        base: false,
        lg: true
    })


    return (<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay
    >
        <DrawerContent bg='white' p='4'>
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