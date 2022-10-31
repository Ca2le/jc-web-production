import React, { useContext } from 'react'
import { LangageContext } from '../../../components.libary'
import { Description, DescriptionContainer, Link, LinkContainer, Container } from './subtext..styled'

function SubtextComponent() {
  const { state_langange } = useContext(LangageContext)
  return (
    <Container>
      <DescriptionContainer>
        <Description>{state_langange.showroom_text}</Description>
      </DescriptionContainer>
      <LinkContainer>
        <Link>{state_langange.showroom_link_text}</Link>
      </LinkContainer>
    </Container>
  )
}

export default SubtextComponent