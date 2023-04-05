import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/sucess";

export default function Success(){
    return (
        <SuccessContainer>
            <h1>Compra Efetuada</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                 Uhuul <strong>Giovani</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">
            </Link>
        </SuccessContainer>
    )
}