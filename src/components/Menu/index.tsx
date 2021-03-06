import Link from "next/link";
import { ReactNode } from "react";
import { MdAddAlert, MdAttachMoney, MdTimeline } from "react-icons/md";

import { Flex, HStack, Text } from "@chakra-ui/react";

type MenuProps = {
    children?: ReactNode;
}

export function Menu({ children }: MenuProps) {
    return (
        <Flex
            display={['none', 'none', 'none', 'flex']}
            bg='white'
            width='240px'
            flexDirection='column'
            height='120vh'
            marginRight='3.2rem'
        >
            {children}
            <Text
                fontWeight='700'
                fontSize='24'
                margin='2.4rem 2.4rem 0'
                bg={['red', 'white']}
            >
                Menu
            </Text>
            <HStack
                margin='1.48rem 2.4rem'
                cursor='pointer'
            >
                <MdTimeline size={24} style={{ marginBottom: '36px', marginRight: '16px' }} />
                <Link href='/'>
                    <Text>Mercado</Text>
                </Link>
            </HStack>
            <HStack
                margin='.48rem 2.4rem'
                cursor='pointer'
            >
                <MdAttachMoney size={24} style={{ marginBottom: '36px', marginRight: '16px' }} />
                <Link href='/wallet'>
                    <Text>Carteira</Text>
                </Link>
            </HStack>
            <HStack
                margin='.48rem 2.4rem'
                cursor='pointer'
            >
                <MdAddAlert size={24} style={{ marginBottom: '36px', marginRight: '16px' }} />
                <Link href='/alerts'>
                    <Text>Alertas</Text>
                </Link>
            </HStack>
        </Flex>
    )
}