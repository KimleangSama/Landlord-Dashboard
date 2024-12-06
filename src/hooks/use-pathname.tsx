import { useMemo } from 'react'
import { useRouter } from '@tanstack/react-router'

export function usePathname () {
  const router = useRouter()
  const pathname = router.state.location.pathname

  return useMemo(() => pathname, [pathname])
}
