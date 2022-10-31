import React, { useContext, useState } from 'react'
import * as CL from '../../components.libary'
import NavLinks from '../nav_links/nav_links.component'
import { Cheeze, Hamburger } from './hamburger.styled'



function HamburgerComponent() {
    const {state, setState} = useContext(CL.HamburgerToggleContext)
    const screen = useContext(CL.ScreenSizeContext)
    const {device, navbarStatus} = screen
    if(device === 'laptop' ||device === 'desktop') {
        return <></>
    } else {
        return (
            <Hamburger onClick={ () => setState(!state)}>
            <Cheeze toggle={state}/>
        </Hamburger>
        )
    }
}


export default HamburgerComponent