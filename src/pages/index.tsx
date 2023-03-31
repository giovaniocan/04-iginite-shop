import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/Shirt/1.png'
import camiseta2 from '../assets/Shirt/2.png'
import camiseta3 from '../assets/Shirt/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image  src={camiseta1} alt="camiseta 1" width={520} height={400}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image  src={camiseta2} alt="camiseta 1" width={520} height={400}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      </HomeContainer>
  )
}
