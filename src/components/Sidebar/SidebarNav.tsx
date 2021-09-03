import { Stack } from "@chakra-ui/react"

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

import { SidebarLink } from "./SidebarLink"
import { SidebarSession } from "./SidebarSession"

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <SidebarSession title="GERAL">
        <SidebarLink href="/dashboard" icon={RiDashboardLine}>Dashboard</SidebarLink>
        <SidebarLink href="/users" icon={RiContactsLine}>Usuários</SidebarLink>
      </SidebarSession>
      <SidebarSession title="AUTOMAÇÃO">
        <SidebarLink href="/forms" icon={RiInputMethodLine}>Formulários</SidebarLink>
        <SidebarLink href="/automation" icon={RiGitMergeLine}>Automação</SidebarLink>
      </SidebarSession>
    </Stack>
  )
}