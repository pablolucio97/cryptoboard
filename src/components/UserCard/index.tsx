import { Avatar, Box, Text } from "@chakra-ui/react";
import { SecondaryButton } from "../SecondaryButton";
import { Title } from "../Title";
import { signOut } from 'next-auth/client'

type UserCardProps = {
    name: string;
    avatarUrl: string;
}

export function UserCard({ name, avatarUrl }: UserCardProps) {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='space-between'
            padding='1rem'
            background='white'
            borderRadius='4px'
            width='160px'
            marginLeft='1.6rem'
        >
            <Title 
                content='Login'
            />
            <Text
                fontSize='.8rem'
                marginTop='2rem'
            >
                Logado como
            </Text>

            <Avatar
                src={avatarUrl}
            />
            <Text
                fontSize='.8rem'
            >
                {name}
            </Text>
            <SecondaryButton
                action={() => { signOut(); }}
                label='Sair'
                size='sm'
            />
        </Box>
    )
}