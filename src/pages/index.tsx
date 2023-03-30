import { styled } from "../styles"

 const Button = styled('button', {
  backgroundColor: '$rocketseat',
  border: 0,
  borderRadius: 8,
  padding: '16px 16px',

  span: {
    fontWeight: 'bold',
  },  
 })

export default function Home() {
  return (
    <Button>
      <span>teste</span>
      Enviar
      </Button>
  )
}
