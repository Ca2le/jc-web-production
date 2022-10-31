import styled from "styled-components";
interface ISVG {
    device: string
}
export const SVG = styled.svg<ISVG>`
height: ${props => {
    if(props.device === 'desktop') return '4rem'
    if(props.device === 'tablet' || props.device === 'phone') return '4rem'
    else return '4rem'
}}; 
`
export const SVGContainer = styled.div`
    
    height: 5rem;
    width: auto;
    display: flex;
    align-items: center;
`
