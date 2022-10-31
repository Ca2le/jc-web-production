import styled from "styled-components";
import theme from "../../../global/styles/theme";


export const Hamburger = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height:  4rem;
    width: 3rem;
`
interface IC {
    toggle: boolean
}
export const Cheeze = styled.div<IC>`
    ${props => {
        return `
            position: absolute;
            background-color: ${theme.hexcolors.dark};
            height: 0.1rem;
            width: 2rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            &:before{
                content: '';
                background: ${theme.hexcolors.dark};
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                bottom: 10px;
            }
        &:after{
            content: '';
            background: ${theme.hexcolors.dark};
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 10px;
    }
        `
    }}
    
`