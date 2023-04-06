import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/sucess";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps{
    costumerName: string
    product: {
        name:string
        imageUrl: string
    }
}

export default function Success({costumerName, product}: SuccessProps){
    return (
        <>
            <Head>
              <title> Compra Efetuada    | Ignite Shop</title>
              <meta name="robots" content="noindex" /> {/*não indexa essa pagina*/ }
            </Head>
            <SuccessContainer>
                <h1>Compra Efetuada</h1>

                <ImageContainer>
                    <Image src={product.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>

                <p>
                    Uhuul <strong>{costumerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catalogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {


    if(!query.session_id){
        return {
            redirect: {
                destination: '/',
                permanent: false, // se você verdadeira o usuario nunca consiguiria enrar nessa pagina
            }
        }
    }
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const costumerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            costumerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }
}