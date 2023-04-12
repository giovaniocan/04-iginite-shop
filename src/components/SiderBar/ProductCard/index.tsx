import Image from "next/image"
import { CardContainer, ImageContainer, InfoContainer, RemoveButton } from "./styles"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

interface ProductCardProps{
    id: string
    name: string
    imageUrl: string
    price: string
}

export function ProductCard({id, imageUrl, name, price}:ProductCardProps){
    const {removeProduct} = useContext(CartContext)

    function remove(){
        removeProduct(id)
    }

    return (
        <CardContainer>
            <ImageContainer>
                 <Image src={imageUrl} alt="" height={94} width={94} />
            </ImageContainer>
            
            <InfoContainer>
                <h3>{name}</h3>
                <h4>{price}</h4>
                <RemoveButton onClick={remove}>Remover</RemoveButton>
            </InfoContainer>
        </CardContainer>
    )
}