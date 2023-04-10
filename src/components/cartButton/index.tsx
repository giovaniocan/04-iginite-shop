import {Tote} from 'phosphor-react'
import { Container } from './sytles'

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export function CartButton(){
    const {productsInCart} = useContext(CartContext)
    return (
        <Container>
            <button>
                <Tote color="#8D8D99" size={24} />
                <p>{productsInCart.length}</p>
            </button>
        </Container>
    )
}