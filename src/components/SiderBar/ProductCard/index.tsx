interface ProductCardProps{
    id: string
    name: string
    imageUrl: string
    price: string
}

export function ProductCard({id, imageUrl, name, price}:ProductCardProps){
    return (
        <div>
            {name}
        </div>
    )
}