import { CloseContainer, SidebarContainer } from "./styles"
import { X } from 'phosphor-react'

interface SidebarProps{
    closeSidebar: () => void
}

export function SideBar({closeSidebar}: SidebarProps){

    return (
        <SidebarContainer>
            <CloseContainer>
                <button onClick={closeSidebar}>
                    <X  size={32}/>
                </button>
            </CloseContainer>
        </SidebarContainer>
    )
}