import React, { useContext } from 'react'
import * as CL from '../../../components.libary'
import { TextContainer, InnerTextDiv, Text1, Text3 } from './header.styled'
import WordTransformer from '../wordtransformer/wordtransformer.component'


function HeaderComponent() {
    const scrollContext = useContext(CL.ScrollContext)
    const {state_langange} = useContext(CL.LangageContext)
    return (
        <TextContainer>
            <InnerTextDiv>
                <Text1>{state_langange.home_h_1}</Text1>
               <WordTransformer /> 
                <Text3>{state_langange.home_h_3}</Text3>
                <CL.InfoBtn reference={scrollContext.state.aboutSection} text={state_langange.readmore_txt} />
            </InnerTextDiv>
        </TextContainer>
    )
}

export default HeaderComponent