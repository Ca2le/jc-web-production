import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const TextContainer = styled.div`
    height: 100%;
   
    width: 100%;
    max-width: 40rem;
    position: relative;
    @media screen and (max-width: ${theme.screen.phone})  {
        display: flex;
        justify-content: center;
        align-items: center;

}
`
export const InnerTextDiv = styled.div`

    height: 50%;
    width: 25rem;
    display: flex;
    gap: 2%;
    flex-direction: column;
    justify-content: center;
    color: ${theme.hexcolors.dark};
    position: absolute;
    
    @media screen and (min-width: ${theme.screen.desktop}) {
    height: auto;
    position: absolute;
    width: 30rem;
    bottom: 18%;
    }
@media screen and (max-width: ${theme.screen.laptop}) {
    height: auto;
    width: 23rem;
    bottom: 10%;
}
@media screen and (max-width: ${theme.screen.tablet})  {
    width: 80%;
}
@media screen and (max-width: ${theme.screen.phone})  {
    width: 17rem;
}

`
export const Text1 = styled.p`
color: ${theme.hexcolors.dark};
font-size: 3.5rem;
font-weight: ${theme.font_weights.extra_bold};
font-family: ${theme.fonts_prime};
line-height: 1.15;
&::first-letter{
    font-size: 3.9rem;
}
@media screen and (min-width: ${theme.screen.desktop}) {
    font-size: 3.8rem;
    &::first-letter{
    font-size: 4rem;
}
    }
@media screen and (max-width: ${theme.screen.laptop}) {
    font-size: 3rem;
    &::first-letter{
    font-size: 3.2rem;
    }
}
@media screen and (max-width: ${theme.screen.tablet} ) and (max-height: 500px) {
    font-size: 2.1rem;
    &::first-letter{
    font-size: 2.3rem;
    }
}
@media screen and (max-width: ${theme.screen.phone})  {
    font-size: 2.4rem;
    &::first-letter{
    font-size: 2.5rem;
    }
}

`
export const Text3 = styled.p`
color: ${theme.hexcolors.dark};
font-size: 3.5rem;
font-weight: ${theme.font_weights.extra_bold};
font-family: ${theme.fonts_prime};
line-height: 1.15;
@media screen and (min-width: ${theme.screen.desktop}) {
    font-size: 3.8rem;
}
@media screen and (max-width: ${theme.screen.laptop}) {
    font-size: 3rem;
    }
    @media screen and (max-width: ${theme.screen.tablet} ) and (max-height: 500px) {
    font-size: 2.3rem;
}
@media screen and (max-width: ${theme.screen.phone})  {
    font-size: 2.4rem;
    }
`
