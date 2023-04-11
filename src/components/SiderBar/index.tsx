import { SidebarContainer } from "./styles"

interface SidebarProps{
    closeSidebar: () => void
}

export function SideBar({closeSidebar}: SidebarProps){

    return (
        <SidebarContainer>
        </SidebarContainer>
    )
}