import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const Div = styled.div`
display: flex;
justify-content: center;
width: 100%;
gap: 5%;


@media screen and (max-width: 930px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width: ${theme.screen.phone}) {
    gap: 2rem;
    }

`