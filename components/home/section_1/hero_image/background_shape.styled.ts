import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const ShapeContainer = styled.div`
   z-index: 2;
    height: 18rem;
    width: 25rem;
    position: absolute;
    bottom: 3rem;
    right: 4rem;
    @media screen and (min-width: ${theme.screen.desktop}) and (orientation: landscape){
      width: 50%;
      max-width: 31rem;
      bottom: 20%;
      right: 4rem;
    }
    @media screen and (max-width: ${theme.screen.phone}){
      width: 100%;
      bottom: 0;
      right: 5%;
      height: 12rem;
      width: 25rem;
    
    }
  `
  export const InnerShapeContainer = styled.div`
    z-index: 2;
    height: 100%;
    width: 100%;
    position: relative;

  `
  export const SVG = styled.svg`
      height: 100%;
      fill:${theme.hexcolors.rasberry};
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;
  `
  export const BubbleGuyIMGContainer = styled.div`
    position: absolute;
    height: 22rem;
    width: 18rem;
    bottom: 0.3%;
    right: 0.3%;
    z-index: 3;
    @media screen and (min-width: ${theme.screen.desktop}) and (orientation: landscape){
      width: 19rem;
      height: 25rem;
    }
    @media screen and (max-width: ${theme.screen.phone})  {
      height: 15rem;
      width: 12rem;
    }
  `