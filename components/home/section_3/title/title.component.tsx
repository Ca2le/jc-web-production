import React from 'react'
import * as CL from '../../../components.libary'
import { Div, Showroom } from './title.styled'


function TitleComponent() {
  return (
    <Div>
      <CL.MagicBox>
        <Showroom>Showroom</Showroom>
        <CL.MagicUnderLine />
      </CL.MagicBox>

    </Div>
  )
}

export default TitleComponent