/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Layout, Footer } from '../layout/'
import { SEO } from '../components/config'
import { Main } from './Main'

export default function Home() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <SEO title="Home" />
      <Layout>
        <Main />
      </Layout>
      <Footer />
    </div>
  )
}
