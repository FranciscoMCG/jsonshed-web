/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Header, Footer } from '../layout/'
import Main from './Main'
import { SEO } from '../components/config'

export default function App() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <SEO title="Home" />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
