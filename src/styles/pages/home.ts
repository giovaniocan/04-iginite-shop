import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))', 
    marginLeft: 'auto',
    minHeight: 656,
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,     
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 


    img:{
        objectFit: 'cover', // faz a imagem caber no container sem distorcer ela
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6, 

        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transform: 'translateY(110%)',
        opacity:0,
        transition: 'all 0.2s case-in-out',
        

        button:{
            background: '$green500',
            padding: '0.75rem',
            borderRadius: 4,
            border: 0,
            cursor: 'pointer',
        },

        'strong': {
            fontSize: '$lg',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        },

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
    
        },
    },

    '&:hover':{
        footer:{
            transform: 'translateY(0%)',
            opacity: 1,
        },
    },
})