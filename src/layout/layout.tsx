import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { NavbarActions } from '@/components/navbar/navbar-actions'
import { NavbarBreadcrumb } from '@/components/navbar/breadcrumb'
import { usePathname } from '@/hooks/use-pathname'
import { toTitleCase } from '@/components/utils/title-case'

export default function Layout ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const items =
    pathname
      ?.split('/')
      ?.filter(item => item !== '' && item !== 'dashboard')
      ?.map((item, index, array) => ({
        title: toTitleCase(item),
        link: `/${array.slice(0, index + 1).join('/')}`
      })) ?? []
  return (
    <div className='flex w-full h-screen overflow-hidden bg-secondary'>
      <AppSidebar />
      <main className='flex w-0 flex-1 flex-col overflow-hidden'>
        <SidebarInset>
          <header className='sticky z-50 top-0 flex justify-between h-16 shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
            <div className='flex flex-1 items-center gap-1.5 px-2'>
              <SidebarTrigger />
              <Separator orientation='vertical' className='mr-2 h-4' />
              <NavbarBreadcrumb
                items={[{ title: 'Dashboard', link: '/' }, ...items]}
              />
            </div>
            <div className='ml-auto px-3'>
              <NavbarActions />
            </div>
          </header>
          <div className='gap-4 p-4 h-screen overflow-hidden flex-1 relative'>
            {children}
          </div>
        </SidebarInset>
      </main>
    </div>
  )
}
