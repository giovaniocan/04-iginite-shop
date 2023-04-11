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