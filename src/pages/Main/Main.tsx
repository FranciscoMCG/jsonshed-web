/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import UsageSection from './sections/UsageSection/UsageSection'
import HomeSection from './sections/HomeSection/HomeSection'
import AboutSection from './sections/AboutSection/AboutSection'
import FeaturesSection from './sections/FeaturesSection/FeaturesSection'
import ContributeSection from './sections/ContributeSection/ContributeSection'

export default function Main() {
  return (
    <main
      sx={{
        position: 'relative',
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <HomeSection />
      <AboutSection />
      <UsageSection />
      <FeaturesSection />
      <ContributeSection />
    </main>
  )
}
