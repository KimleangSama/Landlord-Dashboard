import { ModeToggle } from "./mode-toggle"

export function NavbarActions() {
    return (
        <div className="flex items-center gap-2 text-sm">
            {/* <div className="hidden font-medium text-muted-foreground md:inline-block">
                Edit Oct 08
            </div> */}
            <ModeToggle />
        </div>
    )
}
