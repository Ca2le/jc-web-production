import type { NextPage } from 'next'
import Head from 'next/head'

import React, { useContext } from 'react'
import * as CL from '../components/components.libary'


const Home: NextPage = () => {


  return (
    <React.Fragment>
      <Head>
        <title>jumpcode.org</title>
        <meta name="description" content="A website agency that focuses on
         customized frontend applications and websites that meet the end-user expectations" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap' rel='stylesheet' />

      </Head>

      <CL.Home />

    </React.Fragment>
  )
}

export default Home
