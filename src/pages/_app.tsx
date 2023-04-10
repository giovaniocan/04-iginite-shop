import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg' 
import {Tote} from 'phosphor-react'

import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { CartContext, CartContextProvider } from "../context/CartContext";
import { useContext } from "react";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { size} = useContext(CartContext)
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <button>
            <Tote color="#8D8D99" size={24} />
            <p>{size ? size : 0}</p>
          </button>
        </Header>
        
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
