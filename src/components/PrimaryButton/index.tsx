import { Button } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
    action: () => void;
    type: 'submit' | 'button';
    size?: 'xs' | 'lg' | 'md' | 'sm'
}

export function PrimaryButton({ action, label, type, size }: ButtonProps) {
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