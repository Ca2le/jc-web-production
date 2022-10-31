import React, { useState } from 'react'
interface ISCC {
    children: React.ReactNode
}
type IState = {
    heroSection: null | any;
    aboutSection: null | any;
    showroomSection: null | any;
    footerSection: null | any;
}
type SetStateType = React.Dispatch<any>

type UseStateType = {
    state: IState;
    setState: SetStateType
}

export const ScrollContext = React.createContext({} as UseStateType)


function ScrollContextComponent({ children }: ISCC) {
    const sections: IState = {
        heroSection: null,
        aboutSection: null,
        showroomSection: null,
        footerSection: null,
    }
    const [sectionObj, setSectionObj] = useState(sections)

    const useStateObj:UseStateType = {
        state: sectionObj,
        setState: setSectionObj
    }

    return (
        <ScrollContext.Provider value={useStateObj}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContextComponent