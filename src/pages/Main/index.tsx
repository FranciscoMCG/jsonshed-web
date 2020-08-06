/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import UsageSection from './sections/UsageSection/UsageSection'
import HomeSection from './sections/HomeSection/HomeSection'

export default function Main() {
  return (
    <main
      sx={{
        position: 'relative',
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <HomeSection sx={{ bg: 'red' }} />
      <UsageSection sx={{ bg: 'green' }} />
    </main>
  )
}
