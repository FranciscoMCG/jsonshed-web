/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Layout, Footer } from '../layout'
import { SEO } from '../components/config'

export default function Docs() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <SEO title="Documentation" />
      <Layout>
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
            docs
          </section>
        </main>
      </Layout>
      <Footer />
    </div>
  )
}
