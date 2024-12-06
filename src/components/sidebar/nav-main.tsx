'use client'

import { ChevronRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { NavLink } from '../shared/navlink'
import { NavItem } from '@/types'
import { useTranslations } from 'use-intl'

export function NavMain ({ items }: { items: NavItem[] }) {
  const i18n = useTranslations()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => {
          const hasSubItems = item.items != null && item.items.length > 0
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className='group/collapsible'
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url as any}>
                      {item.icon && <item.icon />}
                      <span>{i18n(item.title)}</span>
                      {hasSubItems && (
                        <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {hasSubItems && (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map(subItem => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
