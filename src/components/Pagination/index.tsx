import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {PaginationItem} from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage = 1,
    registersPerPage = 10,
    totalCountOfRegisters,
    onPageChange
}: PaginationProps) {

    const siblingsCount = 2
    const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

    const previousPages = currentPage > 1 ?
    generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []
    
    const nextPages = currentPage < lastPage ?
    generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []
    
    function generatePagesArray(from: number, to: number) {
        return [...new Array(to - from)]
            .map((_, index) => {
                return from + index + 1
            })
            .filter(page => page > 0)
    }

    return (
        <Stack
            direction={['column', 'row']}
            mt='8'
            justify='space-between'
            aling='center'
            spacing='6'
        >
            <Box>
                <strong>{currentPage}</strong>
                <strong> de </strong>
                <strong>{totalCountOfRegisters}</strong>
            </Box>
            <Stack direction='row'>
            {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.map(page => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        <PaginationItem
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.map(page => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <Text>...</Text>}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
            </Stack>
        </Stack>
    )
}