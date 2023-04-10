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
}

interface CatTContextProviderProps{
    Children: ReactNode
}

export const CartContext = createContext({} as ContextType)

export function CartContextProvider({Children}: CatTContextProviderProps){
    const [productsInCart, setProductsInCart] = useState<Product[]>([])

    return(
        <CartContext.Provider 
        value={{productsInCart}}
        >
            {Children}
        </CartContext.Provider>
    )
}