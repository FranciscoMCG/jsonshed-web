/** @jsx jsx */
import { jsx } from 'theme-ui'

import { SEO } from '../../components/config'
import { HomeSection, AboutSection, ContributeSection } from './sections'

export default function Main() {
  return (
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <SEO title="Main" />
      <HomeSection />
      <AboutSection />
      <ContributeSection />
    </main>
  )
}
