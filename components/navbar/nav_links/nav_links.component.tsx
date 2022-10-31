import React, { useContext, useState } from 'react'
import { ScrollTo } from '../../../scripts/scroll_features'
import * as CL from '../../components.libary'

import { LinkContainer } from './nav_links.styled'


function NavLinks() {
    const scrollContext = useContext(CL.ScrollContext)
    const { state } = useContext(CL.HamburgerToggleContext)
    const { state_langange } = useContext(CL.LangageContext)
    const screen = useContext(CL.ScreenSizeContext)
    const {device, navbarStatus} = screen

    if ( (device === 'laptop' || device === 'desktop') || ((device === 'phone' || device === 'tablet') && state )) {
        return (
            <LinkContainer toggle={state}>
                <CL.InputScroll reference={scrollContext.state.aboutSection} text={state_langange.nav_services} />
                <CL.InputScroll reference={scrollContext.state.showroomSection} text={state_langange.nav_showroom} />
                {/* <CL.Link value={`${state_langange.nav_developers}`} route={`/${state_langange.nav_developers.toLowerCase()}`} /> */}
                <CL.InputScroll reference={scrollContext.state.footerSection} text={state_langange.nav_contact} />
            </LinkContainer>)
    } else {
        return (
            <></>
        )
    }
}

export default NavLinks