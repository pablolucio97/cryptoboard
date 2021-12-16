import { Text } from '@chakra-ui/react'

type TitleProps = {
    content: string
    size?: 'tiny' | 'normal'
}

export function Title({ content, size }: TitleProps) {
    return (
        <Text
            fontSize={size === 'tiny' ? '.72rem' : '1.48rem'}
            color='black'
            fontWeight='800'
            marginBottom='-12px'
            textAlign='center'
            width={size === 'tiny' ? '72px' : null}
        >
            {content}
        </Text>
    )
}
