import { Text } from '@chakra-ui/react'

type TitleProps = {
    content: string
    size?: 'tiny' | 'normal'
}

export function Title({ content, size }: TitleProps) {
    return (
        <Text
            fontSize={size === 'tiny' ? '.92rem' : '1.48rem'}
            color='black'
            fontWeight='800'
            marginBottom='-12px'
        >
            {content}
        </Text>
    )
}
