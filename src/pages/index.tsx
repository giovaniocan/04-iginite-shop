import Image from "next/image";
import Head from "next/head";
import { HomeContainer, Product } from "../styles/pages/home";
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css' 

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

import {Tote} from 'phosphor-react'

interface HomeProps{
  products: {
    id: string, 
    name: string, 
    imageUrl: string, 
    price: string
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <> 
      <Head>
        <title> Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link  key={product.id} href={`/product/${product.id}`} prefetch={false} > {/* se fica falso, ele precarrega a oagina somente quando passa pelo hover( em lins), se ficar verdadeiros ele pre-carrega todos assim que  aaplicação abre */}
            <Product
                
              
              className="keen-slider__slide"
            >
              <Image  src={product.imageUrl} alt="camiseta 1" width={520} height={400}/>

              <footer>
                <div>
                 <strong>{product.name}</strong>
                 <span>{product.price}</span>
                </div>
                <button>
                  <Tote size={32} color="#fff"  weight="bold"/>
                </button>
              </footer>
            </Product>
            </Link>
          )
        })}
      
        </HomeContainer>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })
  

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price


    return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100), // vem em centavos, e sempre vai ser melhor assim, para mostrar em tela pegao valor / 100
        
    }
  })

  return{
    props: {
      products
    }, 
    revalidate: 60 * 60 *2 // 2 horas 
  }
}