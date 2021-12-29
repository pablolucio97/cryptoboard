import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface DrawerProps{
    children: ReactNode
}

type ContextProps = UseDisclosureReturn

export  const SideDrawerContext = createContext({} as ContextProps)

export function DrawerProvider({children} : DrawerProps){

    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return(
        <SideDrawerContext.Provider value={disclosure}>
            {children}
        </SideDrawerContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SideDrawerContext)