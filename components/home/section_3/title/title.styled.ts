import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const Div = styled.div`
     position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`
export const Showroom = styled.p`
    font-size: 2.9rem;
    font-style: ${theme.fonts_prime};
    font-weight: ${theme.font_weights.light};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(1.27);
    color: black;
    white-space: nowrap;

`

