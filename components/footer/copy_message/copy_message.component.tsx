import React, { useContext } from 'react'
import * as CL from '../../components.libary'

import { PopupContainer, Message } from './copy_message.styled'

function CopyMessageComponent() {
  const { device } = useContext(CL.ScreenSizeContext)
  if (device === 'phone') {
    return (
      <>
      </>
    )
  }
  else {
    return (
      <PopupContainer>
        <CL.Icon icon_type={'popup'} />
        <Message>Copied!</Message>
      </PopupContainer>
    )
  }
}

export default CopyMessageComponent