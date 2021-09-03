import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Elias Januario</Text>
          <Text color="gray.300" fontSize="small">eliasjanuario@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Elias Januario" src="https://github.com/eliasjanuario.png" />
    </Flex>
  )
}