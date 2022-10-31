import styled from "styled-components";
import theme from "../../../global/styles/theme";

export const LogoContainer = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: end;
    @media screen and (max-width: 900px) {
        height: 30%;
        justify-content: center;
    }
`

export const SVG = styled.svg`
    
    fill: ${theme.hexcolors.dark};
`