/** @jsx jsx */
import { jsx } from 'theme-ui'

import { SEO } from '../../../components/config'
import { Logo } from '../../../components/graphics'
import { Card } from '../../../components/surfaces'

export default function Home() {
  return (
    <section
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '-1rem',
      }}
    >
      <SEO title="Home" />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: '30%',
        }}
      >
        <Card
          sx={{
            variant: 'cards.primary',
            textAlign: 'center',
          }}
        >
          <Logo
            sx={{
              variant: 'styles.h1',
              color: 'primary',
              fontSize: [6, 8, 10],
            }}
          />
          <p
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 3],
              textAlign: 'center',
            }}
          >
            a fake api for testing and prototyping&#44; built in Node.JS and
            TypeScript
          </p>
        </Card>
      </div>
    </section>
  )
}
