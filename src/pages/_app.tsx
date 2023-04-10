import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg' 
import {Tote} from 'phosphor-react'

import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { CartContextProvider } from "../context/CartContext";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <button>
            <Tote color="#8D8D99" size={24} />
            <p>1</p>
          </button>
        </Header>
        
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
