import React, { useContext, useEffect, useRef } from 'react'
import { Container, InnerDivImage, InnerDivHeader } from './section_1.styled'
import * as CL from '../../components.libary'



function Section_1() {
  const scrollContext = useContext(CL.ScrollContext)
  const heroRef = useRef(null);
  
  useEffect( () => {
    scrollContext.setState( (prevState: any) => {
    return {...prevState, heroSection: heroRef}
  })
},[]) 
  return (
    <Container ref={heroRef}>
      <InnerDivImage>
        <CL.HeroImage/>
      </InnerDivImage>
      <InnerDivHeader>
        <CL.Header />
      </InnerDivHeader>
    </Container>
  )
}

export default Section_1