import {Tote} from 'phosphor-react'
import { Container } from './sytles'

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface CartButtonProps{
    openSidebar: () => void
}

export function CartButton({openSidebar}: CartButtonProps){
    const {productsInCart} = useContext(CartContext)
    return (
        <Container>
            <button onClick={openSidebar}>
                <Tote color="#8D8D99" size={24} />
                <p>{productsInCart.length}</p>
            </button>
        </Container>
    )
}