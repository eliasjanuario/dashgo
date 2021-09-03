import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from '../Logo/Logo'
import { Profile } from '../Profile/Profile'
import { SearchBox } from '../SearchBox/SearchBox'
import { Notifications } from '../Notifications/Notifications'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true 
  })

  return (
    <Flex as="header" width="100%" maxWidth={1480} height="20" marginX="auto" marginTop="4"  paddingX="6" align="center">
      { !isWideVersion && <IconButton aria-label="Open Navigation" icon={ <Icon as={RiMenuLine}/> } fontSize="24" variant="unstyled" onClick={onOpen} marginRight="2" />}
      <Logo />
      { isWideVersion && <SearchBox /> }
      <Flex align="center" marginLeft="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}