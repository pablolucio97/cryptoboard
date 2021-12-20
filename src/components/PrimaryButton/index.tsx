import { Button } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
    action: () => void;
    type: 'submit' | 'button';
    size?: 'xs' | 'lg' | 'md' | 'sm'
    disabled?: boolean
}

export function PrimaryButton({ action, label, type, disabled}: ButtonProps) {
    return (
        <Button
            onClick={action}
            bg='black'
            color='yellow'
            type={type}
            disabled={disabled}
        >
            {label}
        </Button>
    )
}