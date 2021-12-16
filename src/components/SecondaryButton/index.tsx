import { Button } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
    action: () => void;
}

export function SecondaryButton({ action, label }: ButtonProps) {
    return (
        <Button
            bg='transparent'
            color='gray'
            border='1px solid gray'
            onClick={action}
        >
            {label}
        </Button>
    )
}