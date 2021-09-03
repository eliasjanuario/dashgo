import { ReactNode } from "react"
import { Box, Stack, Text } from "@chakra-ui/react"

interface SidebarSessionProps {
  title: string
  children: ReactNode
}

export function SidebarSession({ title, children }: SidebarSessionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" marginTop="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}