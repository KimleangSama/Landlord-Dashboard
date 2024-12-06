import { NavItem } from '@/types'
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from 'lucide-react'

const navMain: NavItem[] = [
  {
    title: 'sidebar.dashboard',
    url: '/dashboard',
    icon: SquareTerminal,
    isActive: true
  },
  {
    title: 'Models',
    url: '#',
    icon: Bot,
    items: [
      {
        title: 'Genesis',
        url: '#'
      },
      {
        title: 'Explorer',
        url: '#'
      },
      {
        title: 'Quantum',
        url: '#'
      }
    ]
  },
  {
    title: 'Documentation',
    url: '#',
    icon: BookOpen,
    items: [
      {
        title: 'Introduction',
        url: '#'
      },
      {
        title: 'Get Started',
        url: '#'
      },
      {
        title: 'Tutorials',
        url: '#'
      },
      {
        title: 'Changelog',
        url: '#'
      }
    ]
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings2,
    items: [
      {
        title: 'General',
        url: '#'
      },
      {
        title: 'Team',
        url: '#'
      },
      {
        title: 'Billing',
        url: '#'
      },
      {
        title: 'Limits',
        url: '#'
      }
    ]
  }
]
const projects: NavItem[] = [
  {
    title: 'Design Engineering',
    url: '#',
    icon: Frame
  },
  {
    title: 'Sales & Marketing',
    url: '#',
    icon: PieChart
  },
  {
    title: 'Travel',
    url: '#',
    icon: Map
  }
]

export const sidelink = {
  navMain,
  projects
}
