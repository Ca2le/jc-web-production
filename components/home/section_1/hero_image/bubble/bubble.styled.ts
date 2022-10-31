import styled, { keyframes } from "styled-components";



interface IBubbleContainer {
    size: number;
    delay: string;
    endOfY: number;
    endOfX: number;
    device: string;
    animationDone: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const bubbleAnimation = (device: string, endOfY:number, endOfX:number, size:number) => keyframes`
0%  {opacity: 1; height: 0; width: 0; top: ${device === 'desktop' ? '5%' : '19%'}; right: ${device === 'phone' ? '24%' : '34%'};}
20%  {opacity: 1; height: ${`${size}px`}; width: ${`${size}px`}; }

100%{opacity: 1; top: ${`${endOfY}%`}; right: ${`${endOfX}%`};}
`

export const BubbleContainer = styled.div<IBubbleContainer>`
      
        opacity: ${ props => !props.animationDone ? 0 : 1 };
        z-index: 4;
        height: ${props => `${props.size}px`};
        width:  ${props => `${props.size}px`};
        top:  ${props => `${props.endOfY}%`};
        right:  ${props => `${props.endOfX}%`};
        position: absolute;
        animation-name: ${ props => bubbleAnimation(props.device, props.endOfY, props.endOfX, props.size)};
        animation-duration: 5s;
        animation-delay: ${props => props.delay};
 
    `
export const InnerBubbleContainer = styled.div`
        position: relative;
        height: 100%;
        width: 100%;
    `
export const Bubble = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #ffffff64;
        border: solid 1px black;
        border-radius: 100%;
    `
export const Reflection = styled.div`

        height: 20%;
        width: 40%;
        background-color: #ffffff;
        border: solid 1px black;
        border-radius: 100%;
        position: absolute;
        top: 25%;
        left: 60%;
        transform: rotate(20deg) translateX(-60%) translateY(-25%);
    `