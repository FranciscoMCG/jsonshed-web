/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Layout, Footer } from '../components/layout'
import { SEO } from '../components/config'
import HomeSection from './main/Home/Home'
import About from './main/About/About'
import Contribute from './main/Contribute/Contribute'

export default function Home() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        p: 3,
      }}
    >
      <SEO title="Home" />
      <Layout>
        <main
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          <HomeSection />
          <About />
          <Contribute />
        </main>
      </Layout>
      <Footer />
    </div>
  )
}
