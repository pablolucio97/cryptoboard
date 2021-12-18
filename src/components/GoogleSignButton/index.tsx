import { Button } from '@chakra-ui/react'
import { ImGoogle } from 'react-icons/im'

type GoogleSignInButtonProps = {
    action: () => void
}

export function GoogleSignInButton({ action }: GoogleSignInButtonProps) {
    return (
        <Button
            onClick={action}
            width='180px'
            color='white'
            bg='#ff673d'

        >
            <ImGoogle
                style={{ marginRight: '8px' }}
            /> Google
        </Button>
    )
}