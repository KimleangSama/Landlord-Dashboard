import { Link, LinkProps } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface NavLinkProps
  extends Omit<LinkProps, 'activeProps' | 'inactiveProps'> {
  children: React.ReactNode
  activeClassName?: string
  className?: string
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, activeClassName = 'active', className, to, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        to={to}
        className={className}
        activeProps={{ className: cn(className, activeClassName) }}
        inactiveProps={{ className }}
        {...rest}
      >
        {children}
      </Link>
    )
  }
)

// Add display name for better debugging
NavLink.displayName = 'NavLink'
