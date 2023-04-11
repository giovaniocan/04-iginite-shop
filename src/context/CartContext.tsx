import { Children, ReactNode, createContext, useState } from "react";

interface Product{
    id: string
    name: string
    imageUrl: string
    price: string
    priceInNumber: number
    description: string
    defaultPriceId: string
}

interface ContextType{
    productsInCart: Product[]
    addToCart: (product: Product) => void
    removeProduct: (id: string) => void
}

interface CatTContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as ContextType)

export function CartContextProvider({children}: CatTContextProviderProps){
      const [productsInCart, setProductsInCart] = useState<Product[]>([]);

    function  addToCart(product: Product){

        const productAlreadyExistInCart = productsInCart.find(item => item.id === product.id)
        
        if(productAlreadyExistInCart){
           return alert('produto ja existe no carrinho')
            
        }
        setProductsInCart(oldState => [...oldState, product])
    }

    function removeProduct(id: string){
        const cartWithoutRemoveOne = productsInCart.filter(product => product.id !== id)
        setProductsInCart(cartWithoutRemoveOne)
    }

    

    return(
        <CartContext.Provider 
        value={{productsInCart, addToCart, removeProduct}}
        >
            {children}
        </CartContext.Provider>
    )
}