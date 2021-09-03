import { Button } from "@chakra-ui/react"

interface PaginationButtonProps {
  number: number
  isCurrent?: boolean
}

export function PaginationButton({ isCurrent = false, number }: PaginationButtonProps) {
  if (isCurrent) {
    return (
      <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{ background: "pink.500", cursor: "default" }}>
        {number}
      </Button>
    )
  }

  return (
    <Button size="sm" fontSize="xs" width="4" background="gray.700" _hover={{ background: "gray.500" }}>
      {number}
    </Button>
  )
}