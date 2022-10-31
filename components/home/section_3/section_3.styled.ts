import styled from "styled-components";
import theme from "../../../global/styles/theme";


export const OuterContainer = styled.div`

    height: auto;
    background-color: ${theme.hexcolors.showroom};
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 5rem;


`
export const InnerContainer = styled.div`
    height: auto;
    width: 60rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    
    @media screen and (max-width: ${theme.screen.tablet}) {
        width: 100%;
        justify-content: space-between;
        align-items: center;
      
    }
    @media screen and (max-width: ${theme.screen.phone}) {
        justify-content: space-between;
        align-items: center;
      
    }
   

 
`

