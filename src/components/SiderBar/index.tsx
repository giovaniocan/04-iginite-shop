import { useContext } from "react"
import { CloseContainer, Content, SidebarContainer, ProductList, CheckoutInfo, Quantity, Price, Checkout, CheckoutButton } from "./styles"
import { X } from 'phosphor-react'
import { CartContext } from "../../context/CartContext"
import { ProductCard } from "./ProductCard"
import { api } from "../../lib/axios"


interface SidebarProps{
    closeSidebar: () => void
}

export function SideBar({closeSidebar}: SidebarProps){

    const {productsInCart} = useContext(CartContext)    

    const totalPrice = productsInCart.reduce((acc, item) => {
        return acc += item.priceInNumber
    }, (0))

    async function handleBuyProductsInCart(){
        try {
            const response = await api.post('/api/checkout', {
              pricesIds: productsInCart.map(product => {
                return product.defaultPriceId
              })
            });

            const { checkoutUrl } = response.data;
      
            window.location.href = checkoutUrl;
          } catch (error) {
            // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
            alert('Falha ao redirecionar ao checkout!!!!!!');
          }
    }

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
                        <span>{productsInCart.length}</span>
                    </Quantity>
                    <Price>
                        <h3>Valor Total</h3>
                        <span>R$ {totalPrice.toFixed(2)}</span>
                    </Price>
            </CheckoutInfo>
            <CheckoutButton onClick={handleBuyProductsInCart}>
                Finalizar Compra
            </CheckoutButton>
           </Checkout>
            
        </SidebarContainer>
    )
}