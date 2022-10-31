import * as CL from '../../components.libary'
import React, { useContext, useEffect, useRef } from 'react'
import theme from '../../../global/styles/theme'
import { LangageContext, WideCard } from '../../components.libary'
import { CardContainer, S2Container, S2InnerContainer } from './section_2.styled'

function Section_2() {
  const { state_langange } = useContext(LangageContext)
  const scrollContext = useContext(CL.ScrollContext)
  const aboutRef = useRef(null);


  useEffect(() => {
    scrollContext.setState((prevState: any) => {
      return { ...prevState, aboutSection: aboutRef }
    })
  }, [])
 
  return <S2Container ref={aboutRef}>
    <S2InnerContainer >
      <CardContainer >
        {state_langange.about_card.map( (element, index) => {
          return <WideCard key={element.id} index={index} id={element.id} direction={element.direction} imgBGColor={element.background_color} header={element.about_card_h} text={element.about_card_txt} link={element.link} />
        })}
      </CardContainer>
    </S2InnerContainer>
    <CL.Overlap />
  </S2Container>

}

export default Section_2

/*  imgBGColor: string;
    : string;
    text: string;
    link: string; */

