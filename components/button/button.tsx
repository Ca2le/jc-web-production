import React from 'react'

/**
 * Button onClick Function 🖱️
 * @param props onClickFunction.
 * @returns Void.
 */

type ButtonProps = {
  children: string | null;
  eventFunction: (event: React.MouseEvent) => void;
}

const buttonStyle: React.CSSProperties = {
  fontSize: '30px',
  border: '3.5px solid black',
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderRadius: '30px',
  width: '20rem',
  color: 'black',
  margin: '5px'
}

function Button({eventFunction, children}: ButtonProps) {
 return <button onClick={eventFunction} style={buttonStyle}>{children}</button>
}

export default Button