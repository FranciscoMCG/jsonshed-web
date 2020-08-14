/** @jsx jsx */
import { jsx, Text } from 'theme-ui'

import { Layout } from '../components/layout'
import { SEO } from '../components/config'

export default function NotFound() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <SEO title="Not found" />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <section
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '-1rem',
          }}
        >
          <Layout>
            <Text
              sx={{
                variant: 'styles.h1',
                color: 'primary',
                fontSize: [6, 8, 10],
                textAlign: 'center',
              }}
            >
              404
            </Text>
            <p
              sx={{
                variant: 'text.body',
                fontSize: [1, 2, 3],
                textAlign: 'center',
              }}
            >
              Ups... it seems that this page does not exist
            </p>
          </Layout>
        </section>
      </main>
    </div>
  )
}
