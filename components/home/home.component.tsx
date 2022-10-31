import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as CL from '../components.libary'

const Container = styled.div`
  height: auto;
  width: 100%;
  
`


function Home() {
  
  
  return (
      <Container>
        <CL.Section_1 />
        <CL.Section_2 />
        <CL.Section_3 />
      </Container>
  ) 
}

export default Home
