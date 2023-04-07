import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent:'space-between',

  
 

  button:{
    background: '#202024',
    border: 0,
    borderRadius: 4,
    padding:'0.75rem',
    cursor: 'pointer',

    p: {
      background: '$green500',
      position: 'absolute',
      padding: '0.4rem',
      marginTop: '-3.5rem',
      marginLeft: '1.2rem',
      borderRadius: '50%',

      fontSize: '1rem',
      fontWeight: 'bold',
      color: '$white',
      
      
      
    },
  },
})
