import Image from "next/image"
import { CardContainer, ImageContainer, InfoContainer, RemoveButton } from "./styles"

interface ProductCardProps{
    id: string
    name: string
    imageUrl: string
    price: string
}

export function ProductCard({id, imageUrl, name, price}:ProductCardProps){
    console.log(price)
    return (
        <CardContainer>
            <ImageContainer>
                 <Image src={imageUrl} alt="" height={94} width={94} />
            </ImageContainer>
            
            <InfoContainer>
                <h3>{name}</h3>
                <h4>{price}</h4>
                <RemoveButton>Remover</RemoveButton>
            </InfoContainer>
        </CardContainer>
    )
}