import styled from "styled-components";
import theme from "../../global/styles/theme";

interface II {
    toggle: boolean;
}

export const Input = styled.input<II>`
color: ${props => props.toggle ? theme.hexcolors.mint : theme.hexcolors.dark };
font-size: ${props => props.toggle ? '2rem' : '1.3rem' };
text-decoration: none;
background: none;
	border: none;
	cursor: pointer;
	outline: inherit;
&:hover{
    text-decoration: underline;
    color: ${theme.hexcolors.rasberry};
}

`