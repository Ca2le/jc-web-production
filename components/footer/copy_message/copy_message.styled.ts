import styled from "styled-components";
import theme from "../../../global/styles/theme";

export const PopupContainer = styled.div`
    z-index: 2;
    position: absolute;
    height: 4rem;
    width: 7rem;
    bottom: 100%;
    .popup{
        left: 60%;
        fill: white;
    }
`
export const Message = styled.p`

    font-family: ${theme.fonts_thick};
    font-weight: ${theme.font_weights.bold};
    position: absolute;
    font-size: 15px;
    top: 40%;
    left: 60%;
    transform: translate(-50%, -40%);
`

