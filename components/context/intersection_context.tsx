import React, { useEffect, useState } from 'react'
interface IICC {
    children: React.ReactNode
}
type ReferenceArrayType = {id: string, isShowing: boolean, reference: any}[];
type SetReferenceArrayType = React.Dispatch<React.SetStateAction<{
    id: string;
    isShowing: boolean;
    reference: any;
}[]>>

interface IReferenceState {
    refArr: ReferenceArrayType;
    setRefArr: SetReferenceArrayType;

}

export const IntersectionContext = React.createContext({} as IReferenceState)

function IntersectionContextComponent({ children }: IICC) {
    const referenceArray = [{id: '_ID:wc1', isShowing: false, reference: null}, {id: '_ID:wc2', isShowing: false, reference: null}, {id: '_ID:wc3', isShowing: false, reference: null}]
    const [refArr, setRefArr] = useState(referenceArray)
    const refState: IReferenceState = {
        refArr,
        setRefArr
    }

    return (
        <IntersectionContext.Provider value={refState}>
            {children}
        </IntersectionContext.Provider>


    )
}

export default IntersectionContextComponent