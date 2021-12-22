import { Button } from "@chakra-ui/react"
import React from "react"

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ number, isCurrent = false, onPageChange }: PaginationItemProps) {

    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                border='none'
                width='4'
                bg='black'
                color='yellow'
                disabled
                _disabled={{
                    bg: 'gray',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            border='none'
            width='4'
            bg='black'
            color='yellow'
            hover={{
                bgColor: 'gray.500'
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}