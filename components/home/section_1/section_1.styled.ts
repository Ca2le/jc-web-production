import styled from "styled-components";
import theme from "../../../global/styles/theme";


export const Container = styled.div`
gap: 3%;
width: 100%;
display: flex;
height: 86vh;
background-color: ${theme.hexcolors.mint};
flex-direction: row;
align-items: flex-end;
justify-content: center;
padding-bottom: 5rem;

@media screen and (min-width: ${theme.screen.desktop}) and (orientation: landscape){
    height: 70vh; 
    }
@media screen and (max-width: ${theme.screen.laptop}) and (orientation: landscape){
    height: 90vh;
}
@media screen and (max-width: ${theme.screen.tablet} ) and (max-height: 500px) {
    height: 70vw;
    width: 100%;

}
@media screen and (max-width: ${theme.screen.phone})  {
    gap: 5%;
    flex-direction: column;
    width: 100%;
    padding-bottom: 1rem;
    height: 80vh;
    align-items: center;
}

`
export const InnerDivImage = styled.div`
display: flex;
justify-content: end;
height: 80%;
width: 40%;

@media screen and (min-width: ${theme.screen.desktop}) and (orientation: landscape) {
    width: 55%;
    }
@media screen and (max-width: ${theme.screen.laptop}) and (orientation: landscape){
    width: 57.5%;
}

@media screen and (max-width: ${theme.screen.phone})  {
   
    width: 80%;
    height: 50%;
}

`
export const InnerDivHeader = styled.div`
height: 80%;
width: 40%;
display: flex;
justify-content: start;
align-items: flex-end;
@media screen and (min-width: ${theme.screen.desktop}) and (orientation: landscape) {
    width: 45%;
    height: 90%;
    }
@media screen and (max-width: ${theme.screen.laptop}) and (orientation: landscape){
    width: 37.5%;
    height: 90%;
}

@media screen and (max-width: ${theme.screen.phone}) {
    width: 80%;
    height: 45%;


}
`