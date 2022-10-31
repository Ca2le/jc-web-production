import React, { useContext } from 'react'
import * as CL from '../components.libary'
import { ScrollTo } from '../../scripts/scroll_features';
import { Input } from './input_scroll.styled'

interface IISC {
  reference: any;
  text: string;
}


function onClickLinkHandler(props: IISC, setState: React.Dispatch<React.SetStateAction<boolean>>) {
  setState(false)
  ScrollTo(props.reference)
}
function InputScrollComponent(props: IISC) {
  const { state, setState } = useContext(CL.HamburgerToggleContext)
  return (
    <Input toggle={state} type='button' value={props.text} onClick={() => onClickLinkHandler(props, setState)} />
  )
}

export default InputScrollComponent