import styled, { keyframes } from "styled-components";
import theme from "../../../../global/styles/theme";

interface IIC {
    imgBGColor: string;

}
interface ICC {
    direction: string;

}
interface ICV {
    cardVisabillty: any;
}


export const CardContainer = styled.div<ICC & ICV>`
    position: relative;
    transition: 0.8s ease-in-out;
    height: 25rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.direction === 'right' ? 'row-reverse' : 'row'};
    gap: 10%;
    opacity: ${props => props.cardVisabillty ? '1' : '0'};
    animation-name: ${props => props.cardVisabillty ? 'card_container' : ''};
    animation-duration: 2s;
    @keyframes card_container {
        0% {
            gap: 40%;
            opacity: 0;
        }
        20% {
            opacity: 1;
        }

      
        45% {
            opacity: 1;
            gap: 10%;

        }

        100% {
            gap: 10%;
        }
    }

    @media screen and (max-width: ${theme.screen.tablet}) {
        gap: 1rem;
        @keyframes card_container {
        0% {
            gap: 40%;
            opacity: 0;
        }
        20% {
            opacity: 1;
        }

      
        45% {
            opacity: 1;
            gap:1rem;

        }

        100% {
            gap: 1rem;
        }
    }
    }

    @media screen and (max-width: ${theme.screen.phone}) {
        height: 44rem;
        animation-name: '';
        opacity: 1;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

`
export const ImageContainer = styled.div<ICC & ICV>`
    display: flex;
    
    height: 100%;
    position: relative;
    width: 50%;
    max-width: 526px;
    animation-name: ${props => props.cardVisabillty ? 'image_container' : ''};
    animation-duration: 1.7s;    
    @media screen and (max-width: ${theme.screen.laptop}) {
    }
    @media screen and (max-width: ${theme.screen.phone}) {
        width: 100%;
        height: 50%;
       
    }
   `
export const Rectangle = styled.div<IIC & ICC & ICV>`
border: 2px solid black;
    position: absolute;
    border-radius: ${props => props.direction === 'left' ? '0px 7px 7px 0' : '7px 0px 0px 7px'};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 21rem;
    background-color: ${props => props.imgBGColor};
    @media screen and (max-width: ${theme.screen.phone}) {
        left: ${props => props.direction === 'left' ? '0' : 'auto'};
        right: ${props => props.direction === 'right' ? '0' : 'auto'};
        top: 50%;
        width: 80%;
        transform: translate(0, -50%);
        
       
    }
`
export const WImage = styled.div`

`
export const OuterTextContainer = styled.div<ICC & ICV>`
    position: relative;
    height: 100%;
    width: auto;
    animation-name: ${props => props.cardVisabillty ? 'outer_text_container' : ''};
    animation-duration: 1.7s;

   

    @media screen and (max-width: ${theme.screen.phone}) {
        width: 80%;
        height: 45%;
        
    }
 
`

export const TextContainer = styled.div<ICC & ICV>`
    position: relative;
    min-width: 25rem;
    width: 25rem;
    max-width: 25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    animation-name: ${props => props.cardVisabillty ? 'text_container' : ''};
    animation-duration: 1.7s; 
    @media screen and (max-width: 1000px) {
        margin-left: ${props => props.direction === 'right' ? '1rem' : 'auto'};
    }
    @media screen and (max-width: ${theme.screen.phone}) {
        min-width: auto;
        width: 100%;
        max-width: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        height: 100%;
    }
`

export const Header = styled.p`
    line-height: 3.2rem;
    font-size: 3rem;
    color: ${theme.hexcolors.dark};
    font-family: ${theme.fonts_prime};
    font-weight: ${theme.font_weights.bold};
    @media screen and (max-width: 1000px) {
        font-size: 2.rem;;
    }
    @media screen and (max-width: ${theme.screen.phone}) {
        font-size: 2.1rem;
        line-height: 2.1rem;
       
    }
`
export const Text = styled.p`
    font-size: 1.1rem;
    line-height: 1.7rem;
    font-family: ${theme.fonts_second};
    font-weight: ${theme.font_weights.redular};
    
`
export const TextLink = styled.p`
    font-size: 1.1rem;
    color: blue;
    font-family: ${theme.fonts_second};
    font-weight: ${theme.font_weights.medium};
`

