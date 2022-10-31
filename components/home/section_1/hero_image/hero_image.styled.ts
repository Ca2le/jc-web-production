import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const HeroImageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    @media screen and (min-width: ${theme.screen.desktop}) and (orientation: landscape){
        
    }
    @media screen and (max-width: ${theme.screen.laptop}) and (orientation: landscape){
       
    }
    @media screen and (max-width: ${theme.screen.phone})  {
   
    }
`