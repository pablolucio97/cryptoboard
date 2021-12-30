
import React, { ReactNode } from "react";
import { MdAddAlert, MdAttachMoney, MdTimeline } from "react-icons/md";

import { Stack } from "@chakra-ui/react";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

type ChildrenProps = {
    children: ReactNode
}

export function SidebarNav({children} : ChildrenProps){
    return(
        <Stack
        align='flex-start'
        backgroundColor='white'
        height='90vh'
    >
        {children}
        <NavSection title='Menu'>
            <NavLink href='/' icon={MdTimeline}>Mercado</NavLink>
            <NavLink href='/wallet' icon={MdAttachMoney}>Carteira</NavLink>
            <NavLink href='/alerts' icon={MdAddAlert}>Alertas</NavLink>
        </NavSection>
    </Stack>
    )

}