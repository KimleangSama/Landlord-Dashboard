import Dashboard from '@/pages/dashboard/dashboard'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dashboard')({
  component: Dashboard
})
