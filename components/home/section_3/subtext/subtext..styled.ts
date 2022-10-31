import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const Container = styled.div`
height: 8rem;
width: 100%;
flex-direction: column;
display: flex;
gap: 1.2rem;
justify-content: center;
text-align: center;


@media screen and (max-width: ${theme.screen.tablet}) {
        width: 100%;
        text-align: center;
    }

@media screen and (max-width: ${theme.screen.phone}) {
       width: 100%;
       text-align: center;
    }

`
export const DescriptionContainer = styled.div`

height: auto;
width: auto;

`

export const Description = styled.p`
font-family: ${theme.fonts_second};
font-size: 1.2rem;
transform: scale(95%, 130%);
margin-left: -2.5%;
`

export const LinkContainer = styled.div`
display: flex;
justify-content: end;
height: auto;

@media screen and (max-width: ${theme.screen.tablet}) {
    justify-content: center;
    }


`

export const Link = styled.p`
color: blue;
font-family: ${theme.fonts_second};
text-decoration: underline;
font-size: 1.2rem;
font-weight: ${theme.font_weights.semibold};



`
