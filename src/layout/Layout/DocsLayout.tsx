import React, { PropsWithChildren } from 'react'

import { Footer, Header } from '../'
import { ColorModeButton } from '../../components/inputs/'

export default function DocsLayout({ children }: PropsWithChildren<any>) {
  return (
    <div style={{ margin: `5rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <Header />
      {children}
      <ColorModeButton />
      <Footer />
    </div>
  )
}
