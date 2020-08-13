/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PropsWithChildren } from 'react'

import { SEO } from '../../config'
import { Footer, Layout } from '..'

export default function DocsLayout({ children }: PropsWithChildren<any>) {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '5rem auto',
        maxWidth: 800,
        padding: `0 1rem`,
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
            {children}
          </section>
        </main>
      </Layout>
      <Footer />
    </div>
  )
}
