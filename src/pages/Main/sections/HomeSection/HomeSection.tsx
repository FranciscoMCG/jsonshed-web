/** @jsx jsx */
import { jsx } from 'theme-ui'

import { SEO } from '../../../../components/config'
import { Logo } from '../../../../components/graphics'
import { Card } from '../../../../components/surfaces'

export default function HomeSection() {
  return (
    <section
      id="home"
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SEO title="Home" />
      <Card
        sx={{
          variant: 'cards.stripes',
          display: 'flex',
          justifyContent: 'center',
          mt: ['30vh', '25vh', '20vh'],
          height: ['30%', '50%', '70%'],
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            variant: 'cards.primary',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: ['90%', '70%', '70%'],
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
              variant: 'styles.h4',
              fontSize: [1, 3, 4],
              textAlign: 'center',
            }}
          >
            a fake api for testing and prototyping
          </h4>
        </Card>
      </Card>
    </section>
  )
}
