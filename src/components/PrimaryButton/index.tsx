import { Button } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
    action: () => void;
    type: 'submit' | 'button';
}

export function PrimaryButton({ action, label, type }: ButtonProps) {
    return (
        <Button
            onClick={action}
            bg='black'
            color='yellow'
            type={type}
        >
            {label}
        </Button>
    )
}