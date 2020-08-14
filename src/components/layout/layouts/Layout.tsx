import React, { PropsWithChildren } from 'react'

import { Header } from '../'
import { ColorModeButton } from '../../inputs'

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div style={{ margin: `1rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <Header />
      {children}
      <ColorModeButton />
    </div>
  )
}
