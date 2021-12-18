import { Button } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
    action: () => void;
    size?: 'xs' | 'lg' | 'md' | 'sm'
}

export function SecondaryButton({ action, label, size }: ButtonProps) {
    return (
        <Button
            bg='transparent'
            color='gray'
            border='1px solid gray'
            onClick={action}
            size={size}
        >
            {label}
        </Button>
    )
}