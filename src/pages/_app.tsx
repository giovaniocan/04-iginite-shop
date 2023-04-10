import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg' 


import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import {  CartContextProvider } from "../context/CartContext";
import { useState } from "react";
import { SideBar } from "../components/sidebar";
import { CartButton } from "../components/cartButton";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [isSidebarOpen, setSideBarOpen] = useState(false)
  

  function openSideBar(){
    setSideBarOpen(true)
  }

  function closeSideBar(){
    setSideBarOpen(false)
  }

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <CartButton />
        </Header>
        
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
