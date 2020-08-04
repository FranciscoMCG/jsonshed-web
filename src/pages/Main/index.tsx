/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import LogoSection from './sections/LogoSection/LogoSection'

export default function Main() {
  return (
    <main
      sx={{
        position: 'relative',
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <LogoSection />
    </main>
  )
}
