import {Button} from '@chakra-ui/react'
import {ImFacebook} from 'react-icons/im'

type FacebookSignInButtonProps = {
    action: () => void
}

export function FacebookSignInButton({action} : FacebookSignInButtonProps){
    return(
        <Button
            onClick={action}
            width='180px'
            bg='#1771ed'
            color='white'
        >
           <ImFacebook
            style={{marginRight: '8px'}}
           /> Facebook
        </Button>
    )
}