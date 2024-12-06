import { useMemo } from 'react'
import { useRouter as useTanStackRouter } from '@tanstack/react-router'

export function useRouter () {
  const router = useTanStackRouter()

  return useMemo(
    () => ({
      back: () => router.history.back(),
      forward: () => router.history.forward(),
      reload: () => window.location.reload(),
      push: (href: string) => router.navigate({ to: href }),
      replace: (href: string) => router.navigate({ to: href, replace: true })
    }),
    [router]
  )
}
