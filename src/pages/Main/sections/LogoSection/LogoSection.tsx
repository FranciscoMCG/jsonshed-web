/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Logo } from '../../../../components/graphics'
import { Card } from '../../../../components/surfaces'

export default function LogoSection() {
  return (
    <section
      sx={{
        variant: 'cards.stripes',
        maxWidth: '90%',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          position: 'relative',
          variant: 'cards.primary',
        }}
      >
        <Logo
          sx={{
            variant: 'text.logoMain',
            fontSize: [5, 6, 7],
          }}
        />
        <h4
          sx={{
            fontSize: [1, 3, 4],
            mt: [-1, -2, -3],
          }}
        >
          a fake api for testing and prototyping
        </h4>
      </Card>
    </section>
  )
}
