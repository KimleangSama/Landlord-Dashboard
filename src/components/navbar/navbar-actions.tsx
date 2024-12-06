import LanguageSwitch from "./language-switch"
import { ModeToggle } from "./mode-toggle"

export function NavbarActions() {
    return (
        <div className="flex items-center gap-2 text-sm">
            <LanguageSwitch />
            <ModeToggle />
        </div>
    )
}
