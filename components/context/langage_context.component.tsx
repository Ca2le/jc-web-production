import React, { useReducer } from 'react'
import langage from '../../global/langage/langage'
import { ILangage } from '../../types/LangageInterface'

interface IIS {
    state_langange: ILangage;
    dispatch: React.Dispatch<IAction> | null
}

const iS: IIS = {
    state_langange: langage.sv,
    dispatch: () => null
}

export const LangageContext = React.createContext(iS)

interface IAction {
    type: string;
    payload?: string
}

const langageReducer = (state: ILangage, action: IAction) => {
    if (action.type === 'sv') {
        return langage.sv
    }
    if (action.type === 'en') {
        return langage.en
    }
    else return state
}

function LangageContextComponent(props: { children: React.ReactNode }) {

    const initialState = langage.sv
    const [state_langange, dispatch] = useReducer(langageReducer, initialState)

    return (
        <LangageContext.Provider value={{ state_langange, dispatch }}>
            {props.children}
        </LangageContext.Provider>
    )
}

export default LangageContextComponent