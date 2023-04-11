import { styled } from "../../../styles";

export const CardContainer = styled('div', {
    display: 'flex',
    gap: '1.25rem',

})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 94,
    height: 101,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    img: {
      objectFit: 'cover',
    }
  });

export const InfoContainer = styled('div', {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',

    h3:{
        fontSize: '$md',
        color: '$gray300',
        fontWeight: 400,
        lineHeight: '160%'
    },

    h4:{
        marginTop: '-0.375',
        fontSize: '$md',
        color: '$gray100',
        fontWeight: 700,
        lineHeight: '160%'
    },
})

export const RemoveButton = styled('div', {
    cursor: 'pointer',
    fontSize: '1rem',
    color: '$green500',
    fontWeight: 700,

    '&:hover':{
        color: '$green300',
    },
})