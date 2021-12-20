import { Text } from '@chakra-ui/react'

type SubTitleProps = {
    content: string
}

export function SubTitle({ content }: SubTitleProps) {
    return (
        <Text
            fontSize='1rem'
            color='gray'
        >
            {content}
        </Text>
    )
}
