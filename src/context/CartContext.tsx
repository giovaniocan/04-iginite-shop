import { Children, ReactNode, createContext, useState } from "react";

interface Product{
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
}

interface ContextType{
    productsInCart: Product[]
    addToCart: (product: Product) => void
}

interface CatTContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as ContextType)

export function CartContextProvider({children}: CatTContextProviderProps){
    const [productsInCart, setProductsInCart] = useState<Product[]>([])

    function  addToCart(product: Product){

        const productAlreadyExistInCart = productsInCart.find(item => item.id === product.id)

        if(!productAlreadyExistInCart){
            setProductsInCart(oldState => [...oldState, product])
        }
    }

    function removeProduct(id: string){
        const cartWithoutRemoveOne = productsInCart.filter(product => product.id !== id)
        setProductsInCart(cartWithoutRemoveOne)
    }

    return(
        <CartContext.Provider 
        value={{productsInCart, addToCart}}
        >
            {children}
        </CartContext.Provider>
    )
}