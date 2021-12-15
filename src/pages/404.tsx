import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import {MdMoneyOffCsred} from 'react-icons/md'

export default function Custom404() {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='90vw'
            height='50vh'
            alignSelf='center'
            marginBottom='8rem'
            >
            <MdMoneyOffCsred size={32}/>
            <h1> Endereço incorreto</h1>
            <Link href='/'>
                <Text
                    maxWidth='400px'
                    textAlign='center'
                >
                    Desculpe, esta página não existe. Para retornar para o mercado, 
                    <a> clique aqui</a>.
                </Text>
            </Link>
        </Box>
    )
}