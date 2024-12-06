import { Suspense, lazy } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const Layout = lazy(() => import('@/layout/layout'))

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <TanStackRouterDevtools />
        </Suspense>
      </Layout>
    </>
  )
})
