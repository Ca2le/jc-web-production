import React, { useEffect, useState } from 'react'

export const ScreenSizeContext = React.createContext<any>('')


function getSize(setDevice: React.Dispatch<React.SetStateAction<string>>) {
    {
        if (window.innerWidth > 1600) {
            return setDevice('desktop')
        }
        if (window.innerWidth > 800 && window.innerWidth <= 1600) {
            return setDevice('laptop')
        }
        if (window.innerWidth <= 800 && window.innerWidth > 600) {
            return setDevice('tablet')
        }
        if (window.innerWidth <= 800 && window.innerWidth > 417) {
            return setDevice('tablet')
        }
        else {
            return setDevice('phone')
        }
    }
}



interface ScreenSizeContextComponentProps {
    children: React.ReactNode
}

function onScroll(scrollState: number, setScrollState: React.Dispatch<React.SetStateAction<number>>, setNavbarStatus: React.Dispatch<React.SetStateAction<string>>) {
    let posY = window.scrollY
    if (scrollState > posY && scrollState > 10) {
        setNavbarStatus('show')
        return setScrollState(window.scrollY)
    }
    if (scrollState < posY && scrollState > 10) {
        setNavbarStatus('hidden')
        return setScrollState(window.scrollY)
    }
    else {
        setNavbarStatus('top')
        return setScrollState(window.scrollY)
    } 

}

function ScreenSizeContextComponent({ children }: ScreenSizeContextComponentProps) {

    const [device, setDevice] = useState('');
    const [scrollState, setScrollState] = useState(0)
    const [navbarStatus, setNavbarStatus] = useState('top')
    const screenObj = {
        device,
        navbarStatus
    }
    useEffect(() => {
        getSize(setDevice)
        window.addEventListener("resize", () => getSize(setDevice))
        return () => removeEventListener('resize', () => getSize)
    }, [])
    useEffect(() => {
        window.addEventListener("scroll", () => onScroll(scrollState, setScrollState, setNavbarStatus))
        return () => removeEventListener('scroll', () => onScroll)
    }, [scrollState])
    return (
        <ScreenSizeContext.Provider value={screenObj}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export default ScreenSizeContextComponent

