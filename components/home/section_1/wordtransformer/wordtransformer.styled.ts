import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const WordContainer = styled.div`
position: relative;
display: flex;
align-items:center;
height: 3.5rem;
width: 100%;
padding-top: 0.2rem;
@media screen and (min-width: ${theme.screen.desktop}) {
    height: 3.8rem;
}
@media screen and (max-width: ${theme.screen.laptop}){
    height: 3rem;
    }
    @media screen and (max-width: ${theme.screen.tablet} ) and (max-height: 500px) {
   height: 2.1rem;

}
@media screen and (max-width: ${theme.screen.phone})  {
    height: 2.4rem;
    }
`
interface IW {
    keyFrame: any
}
export const Word = styled.p<IW>`
position: absolute;
font-family: ${theme.fonts_prime};
margin-right: auto;
font-size: 3.3rem;
color: ${theme.hexcolors.dark};
font-weight: ${theme.font_weights.extra_bold};
animation-name: ${props => { return props.keyFrame}};
animation-duration: 2s;
@media screen and (min-width: ${theme.screen.desktop}) {
    font-size: 3.8rem;
}
@media screen and (max-width: ${theme.screen.laptop}){
    font-size: 3rem;;
    }
    @media screen and (max-width: ${theme.screen.tablet} ) and (max-height: 500px) {
    font-size: 2.1rem;

}
@media screen and (max-width: ${theme.screen.phone})  {
    font-size: 2.4rem;
}
`

