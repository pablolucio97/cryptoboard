import React, { ReactNode } from "react";

import { Box, Stack } from "@chakra-ui/layout";

import { Title } from "../Title";

interface NavSectionProps {
    title: string;
    children: ReactNode
}

export function NavSection({ children, title }: NavSectionProps) {
    return (
        <Box
            display='flex'
            flexDirection='column'
            pl='2.4rem'
            mt='2.4rem'
            >
            <Title 
                content='Menu'
            />
            <Stack
                spacing='4'
                mt='8'
                align='stretch'
            >
                {children}
            </Stack>
        </Box>
    )
}