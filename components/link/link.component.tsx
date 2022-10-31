import React, { useContext } from 'react'
import Link from 'next/link'
import { A, LinkContainer } from './link.styled'
import * as CL from '../components.libary'

interface LinkProps {
  value: string;
  route: string;
}

function LinkComponent(props: LinkProps) {

  const { state } = useContext(CL.HamburgerToggleContext)

  return (
    <React.Fragment>
      <LinkContainer>
        <Link href={props.route} passHref >
          <A toggle={state}>{props.value}</A>
        </Link>
      </LinkContainer>
    </React.Fragment>
  )
}

export default LinkComponent