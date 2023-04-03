import {useRouter} from 'next/router'
import { ImageContainer, ProductContainer, ProductDateails } from '../../styles/pages/product'

export default function Product(){
    const {query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDateails>
                <h1> Camiseta X </h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat cum perspiciatis, mollitia temporibus ducimus pariatur consectetur ipsam? Et, ipsa! Aliquam minima quae molestiae et facilis culpa. Dolor, sint autem.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDateails>
        </ProductContainer>
    )
}