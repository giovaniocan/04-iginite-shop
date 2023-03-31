import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css' 

import camiseta1 from '../assets/Shirt/1.png'
import camiseta2 from '../assets/Shirt/2.png'
import camiseta3 from '../assets/Shirt/3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image  src={camiseta1} alt="camiseta 1" width={520} height={400}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image  src={camiseta2} alt="camiseta 1" width={520} height={400}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image  src={camiseta3} alt="camiseta 1" width={520} height={400}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image  src={camiseta3} alt="camiseta 1" width={520} height={400}/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      </HomeContainer>
  )
}
