import { useContext } from "react"
import { CloseContainer, Content, SidebarContainer, ProductList, CheckoutInfo, Quantity, Price, Checkout, CheckoutButton } from "./styles"
import { X } from 'phosphor-react'
import { CartContext } from "../../context/CartContext"
import { ProductCard } from "./ProductCard"

interface SidebarProps{
    closeSidebar: () => void
}

export function SideBar({closeSidebar}: SidebarProps){

    const {productsInCart} = useContext(CartContext)    

    return (
        <SidebarContainer>
            <CloseContainer>
                <button onClick={closeSidebar}>
                    <X  size={32}/>
                </button>
            </CloseContainer>

            <Content>
                <h2>Sacola de Compras</h2>

                    <ProductList>
                        {productsInCart.map(product => (
                            <ProductCard 
                            key={product.id}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            price ={product.price}
                            />
                        ) )}
                    </ProductList>
            </Content>

            <Checkout>
                <CheckoutInfo>

                    <Quantity>
                        <h3>Quantidade</h3>
                        <span>3 itens</span>
                    </Quantity>
                    <Price>
                        <h3>Valor Total</h3>
                        <span>R$ 270,00</span>
                    </Price>
            </CheckoutInfo>
            <CheckoutButton>
                Finalizar Compra
            </CheckoutButton>
           </Checkout>
            
        </SidebarContainer>
    )
}