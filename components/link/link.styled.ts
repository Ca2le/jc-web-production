import styled from "styled-components";
import theme from "../../global/styles/theme";
interface IA {
    toggle: boolean
}
export const A = styled.a<IA>`
    text-align: center;
    color: ${props => props.toggle ? theme.hexcolors.mint : theme.hexcolors.dark};
    font-size: ${props => props.toggle ? '2rem' : '1.4rem'};
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        color: ${theme.hexcolors.rasberry};
    }
`
export const LinkContainer = styled.div`
   height:  '5rem';
   display: flex;
   align-items: center;
`
