/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Card } from '../../../../components/surfaces'

export default function UsageSection() {
  return (
    <section
      id="usage"
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          variant: 'cards.stripes',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div sx={{ mt: '30vh' }}>page 2</div>
      </Card>
    </section>
  )
}
