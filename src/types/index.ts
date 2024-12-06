import { LucideIcon } from 'lucide-react'

export interface NavItem {
  title: string
  url: string
  disabled?: boolean
  external?: boolean
  icon?: LucideIcon
  isActive?: boolean
  description?: string
  items?: NavItem[]
}
