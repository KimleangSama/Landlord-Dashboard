import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { NavbarActions } from "@/components/navbar/navbar-actions"
import { NavbarBreadcrumb } from "@/components/navbar/breadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full h-screen overflow-hidden bg-secondary">
            <AppSidebar />
            <main className="w-full">
                <SidebarInset>
                    <header className=" flex justify-between h-16 shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex flex-1 items-center gap-1.5 px-2">
                            <SidebarTrigger />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <NavbarBreadcrumb />
                        </div>
                        <div className="ml-auto px-3">
                            <NavbarActions />
                        </div>
                    </header>
                    <div className="gap-4 p-4">
                        {children}
                    </div>
                </SidebarInset>
            </main>
        </div>
    )
}
