import { ElementType } from "react"
import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react"

import { ActiveLink } from '../ActiveLink/ActiveLink'

interface SidebarLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function SidebarLink({ icon, children, href, ...rest }: SidebarLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}