
import { ImageContainer, ProductContainer, ProductDateails } from '../../styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'

interface ProductProps {
    product: {
    id: string, 
    name: string, 
    imageUrl: string, 
    price: string, 
    description: string, 
    defaultPriceId: string
  }
}

export default function Product( {product}: ProductProps){
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    /* const route = useRouter()    caso fosse para uma rota interna*/
   async function handleBuyProduct() {

        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId,
            })
            
            const { checkoutUrl } = response.data

            /* route.push('/checkout') */

            window.location.href = checkoutUrl // para fora da nossa aplicação, algo externo
        } catch (error) {
            //conectar com alguma ferramenta /datadog, sentry
            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout !')
        }
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
            </ImageContainer>

            <ProductDateails>
                <h1> {product.name} </h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
                    Comprar agora
                </button>
            </ProductDateails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [ // se deixar o path vazio, ele vai carregando e gerando as paginas estaticas conforme a necessidade do povo ir entrando
            { params: { id: 'prod_Ne8yF8aFbcnqUS'} }
        ],
        fallback: 'blocking', // para uma melhor experiencia do usuario é recomendado colocar um true e fazer um sjeleton, ondei fica carregando até aparecer as coisas
    }
}

export const getStaticProps: GetStaticProps<any, { id: string}>  = async ({ params }) => {

    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props:{
            product: { 
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-Br', {
                 style: 'currency',
                 currency: 'BRL',
                }).format(price.unit_amount / 100), // vem em centavos, e sempre vai ser melhor assim, para mostrar em tela pegao valor / 100
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate:  60 * 60 *1 // a cada 1 hr
    }
}