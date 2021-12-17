import { Text } from '@chakra-ui/react'

type TitleProps = {
    content: string
    size?: 'tiny' | 'small' | 'normal'
}

export function Title({ content, size }: TitleProps) {
    return (
        <Text
            fontSize={size === 'tiny' ? '.72rem' : size === 'small' ? '.8rem ': '1.48rem'}
            color='black'
            fontWeight='800'
            marginBottom='-12px'
            width={size === 'tiny' ? '72px' : size === 'small' ? '120px ': null}
        >
            {content}
        </Text>
    )
}
