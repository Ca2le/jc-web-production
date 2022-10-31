import React, { Component, useContext, useEffect, useState } from 'react'
import * as CL from '../components.libary'

interface IHTC {
    children: React.ReactNode
}

interface IHamburger {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamburgerToggleContext = React.createContext({} as IHamburger)


function HamburgerToggleComponent(props: IHTC) {

    const screen = useContext(CL.ScreenSizeContext)
    const {device, navbarStatus} = screen

    const [hamburgerToggle, setHamburgaretoggle] = useState<boolean>(false)

    const hamburger: IHamburger = {
        state: hamburgerToggle,
        setState: setHamburgaretoggle

    }

    useEffect(() => {
      if(device === 'laptop' || device === 'desktop'){
        setHamburgaretoggle(false)
      }
    
    }, [hamburgerToggle, device])
    

    return (
        <HamburgerToggleContext.Provider value={hamburger}>
            {props.children}
        </HamburgerToggleContext.Provider>
    )
}

export default HamburgerToggleComponent