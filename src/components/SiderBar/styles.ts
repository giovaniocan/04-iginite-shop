import { styled } from "../../styles";

export const SidebarContainer = styled("div", {
    position: 'absolute',
    height: '100%',
    width: '33%',
    top: 0,
    right: 0,
    zIndex: 1,
  
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '$gray800',
    boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.8)',
})

export const CloseContainer = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',

    button:{
        background: 'transparent',
        border: 0,
        margin: '1.5rem',
        color: '$gray500',
        
        cursor: 'pointer',

        '&:hover':{
            svg:{
                color: '$gray300'
            },
        }
    },



})


export const Content = styled('div', {
    margin: ' 1.5rem 3rem 3rem 3rem',

})

export const ProductList = styled('div', {
     display: 'flex',
     flexDirection:'column',
     gap: '1.5rem',
     marginTop: '2rem',
})

export const Checkout = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: ' auto',
    padding: '0 3rem 3rem',

})

export const CheckoutInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
})

export const Quantity = styled('div', { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    h3: {
        color: '$gray100',
        fontSize: '1rem',
        fontWeight: 400,
      },
    
      span: {
        color: '$gray300',
        fontSize: '$md',
        fontWeight: 400,
      }
})

export const Price = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  
    h3: {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: 700,
    },
  
    span: {
      color: '$gray300',
      fontSize: '$xl',
      fontWeight: 700,
    }
})

export const CheckoutButton = styled('button', {
    border: 0,
    padding: '1.5rem 0',
    borderRadius: 8,
    cursor: 'pointer',

    marginTop:'3.5rem',

    background: '$green500',

    color: '$white',
    fontSize: '$md',
    fontWeight: 700,

    '&:hover':{
        background: '$green300',
    },
})