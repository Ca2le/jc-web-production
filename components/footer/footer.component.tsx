import React, { useContext, useEffect, useRef, useState } from 'react'
import theme from '../../global/styles/theme'
import * as CL from '../components.libary'
import { ContactBtnContainer, CopyContainer, IconContainer, Line, BottomContainer, ContactBtn, ContactContainer, ContactInnerContainer, CopyrightLine, FootContainer, LangageToggle, Message, SocialMediaContainer, UpperContainer } from './footer.styled'

type CopyToggleType = React.Dispatch<React.SetStateAction<{
  className: string;
  copied: string;
  copiedContainer: string;
}>>


async function HandleCopyEvent<T>(event: T, setCopyToggle: CopyToggleType) {
  try {
    await navigator.clipboard.writeText('carl@jumpcode.org').then(() => {
      setCopyToggle({ className: 'check', copied: 'yes', copiedContainer: 'yes_container' })
      setTimeout(() => {
        setCopyToggle({ className: 'copy', copied: 'no', copiedContainer: 'no_container' })
      }, 5000)
    }
    )
  }
  catch (e) {
    console.log('error msg', e)
  }

}
function Footer() {
  const [copyToggle, setCopyToggle] = useState({ className: 'copy', copied: 'no', copiedContainer: 'no_container' })
  const { state_langange } = useContext(CL.LangageContext)
  const scrollContext = useContext(CL.ScrollContext)
  const footRef = useRef(null);

  useEffect(() => {
    scrollContext.setState((prevState: any) => {
      return { ...prevState, footerSection: footRef }
    })
  }, [])

  return (
    <FootContainer ref={footRef}>
      <UpperContainer>
        <CL.FootLogo />
        <Line />
        <ContactContainer>
          <ContactInnerContainer>
            <Message>{state_langange.foot_h}</Message>
            <ContactBtnContainer >
              <ContactBtn className={copyToggle.copied} type={'text'} value={'carl@jumpcode.org'} readOnly />
              <CopyContainer className={copyToggle.copiedContainer} copied={copyToggle.copied} onClick={(event) => HandleCopyEvent(event, setCopyToggle)} >
                {copyToggle.copied === 'yes' ? <CL.CopyMessage /> : null}
                <CL.Icon icon_type={copyToggle.className} />
              </CopyContainer>
            </ContactBtnContainer>
            <SocialMediaContainer>
              <IconContainer>
                <CL.Icon icon_type='linkedin' stroke_width='1px' stroke_color='black' href='https://www.linkedin.com/in/carl-sporrong-400a84157/'/>
              </IconContainer>
              <IconContainer>
                <CL.Icon icon_type='github'stroke_width='1px' stroke_color='black' href='https://github.com/Ca2le' />
              </IconContainer>
            </SocialMediaContainer>
          </ContactInnerContainer>
        </ContactContainer>
      </UpperContainer>
      <BottomContainer>
        <CopyrightLine>{state_langange.foot_copyright}</CopyrightLine>
        <LangageToggle />
      </BottomContainer>
    </FootContainer>
  )
}
ContactBtnContainer
export default Footer