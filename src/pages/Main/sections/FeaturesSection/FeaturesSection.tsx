/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Card } from '../../../../components/surfaces'

export default function FeaturesSection() {
  return (
    <section
      id="features"
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
          variant: 'cards.diagonal',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Card
          sx={{
            variant: 'cards.primary',
            mt: ['12vh', '12vh', '12vh'],
            display: 'flex',
            flexDirection: 'column',
            height: ['80%', '80%', '80%'],
            width: ['90%', '80%', '80%'],
            textAlign: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <h2
            sx={{
              variant: 'text.heading',
              fontSize: [2, 3, 4],
            }}
          >
            Features
          </h2>
        </Card>
      </Card>
    </section>
  )
}
