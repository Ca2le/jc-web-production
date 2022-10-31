import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import * as CL from '../components/components.libary'
import HamburgerToggleComponent from '../components/context/hamburger_toggle_context'
import IntersectionContextComponent from '../components/context/intersection_context'
import LangageContextComponent from '../components/context/langage_context.component'
import ScreenSizeContextComponent from '../components/context/screen_size_context.component'
import ScrollContextComponent from '../components/context/scrollContext.component'
import { globalStyle as GlobalStyle } from '../global/styles/styles'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
  }, []);
  return (
    <React.Fragment>
        <GlobalStyle />
        <ScreenSizeContextComponent>
          <ScrollContextComponent>
            <IntersectionContextComponent>
              <LangageContextComponent>
                <HamburgerToggleComponent>
                  <CL.Navbar />
                  <Component {...pageProps} />
                  <CL.Footer />
                </HamburgerToggleComponent>
              </LangageContextComponent>
            </IntersectionContextComponent>
          </ScrollContextComponent>
        </ScreenSizeContextComponent>
    </React.Fragment>
  )
}

export default MyApp