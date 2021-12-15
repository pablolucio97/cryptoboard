import { Flex, Text, HStack } from '@chakra-ui/react'
import { MdTimeline, MdAttachMoney, MdAddAlert } from 'react-icons/md'
import Link from 'next/link'

export function Menu() {
    return (
        <Flex
            display='flex'
            width='240px'
            flexDirection='column'
            bg='white'
            height='70vh'
        >
            <Text
                fontWeight='700'
                fontSize='24'
                marginLeft='2.4rem'
            >
                Menu
            </Text>
            <HStack
                margin='.48rem 2.4rem'
                cursor='pointer'
            >
                <MdTimeline size={24} />
                <Link href='/'>
                    <Text>Mercado</Text>
                </Link>
            </HStack>
            <HStack
                margin='.48rem 2.4rem'
                cursor='pointer'
            >
                <MdAttachMoney size={24} />
                <Link href='/wallet'>
                    <Text>Carteira</Text>
                </Link>
            </HStack>
            <HStack
                margin='.48rem 2.4rem'
                cursor='pointer'
            >
                <MdAddAlert size={24} />
                <Link href='/alerts'>
                    <Text>Alertas</Text>
                </Link>
            </HStack>
        </Flex>
    )
}