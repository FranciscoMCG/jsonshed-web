/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Logo } from '../../../../components/graphics'
import { Card } from '../../../../components/surfaces'

export default function LogoSection() {
  return (
    <section
      sx={{
        variant: 'cards.dotted',
        maxWidth: '90%',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '-1',
      }}
    >
      <Card
        sx={{
          variant: 'cards.primary',
        }}
      >
        <Logo
          sx={{
            fontSize: 5,
          }}
        />
        <h4
          sx={{
            marginTop: '0.4rem',
          }}
        >
          a fake api for testing and prototyping
        </h4>
      </Card>
    </section>
  )
}
