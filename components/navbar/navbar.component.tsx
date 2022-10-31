import React, { ReactElement, useContext } from 'react'
import theme from '../../global/styles/theme'
import * as CL from '../components.libary'
import { Nav_Div, Nav_Wrapper} from './navbar.styled'



function Navbar(): ReactElement {
  const scrollContext = useContext(CL.ScrollContext)
  const { state } = useContext(CL.HamburgerToggleContext)
  const screen = useContext(CL.ScreenSizeContext)
  const { device, navbarStatus } = screen

  return (

      <Nav_Div toggle={state} device={device} status={navbarStatus}>
        
        <Nav_Wrapper>
          <CL.Logo reference={scrollContext.state.heroSection} color={state ? theme.hexcolors.mint : theme.hexcolors.dark} />
          <CL.NavLinks />
          <CL.HamburgerComponent />
        </Nav_Wrapper>
       
      </Nav_Div>
  )
}

export default Navbar