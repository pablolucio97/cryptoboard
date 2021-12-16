import { Button } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
    action: () => void;
}

export function PrimaryButton({ action, label }: ButtonProps) {
    return (
        <Button
            onClick={action}
            bg='black'
            color='yellow'
        >
            {label}
        </Button>
    )
}