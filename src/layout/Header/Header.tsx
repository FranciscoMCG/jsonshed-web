/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import { Logo } from '../../components/graphics'
import { HeaderMenu } from './HeaderMenu'

export default function Header() {
  return (
    <header
      sx={{
        variant: 'layout.header',
      }}
    >
      <HeaderMenu />
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          to="/"
          sx={{
            variant: 'styles.navlink',
            textDecoration: 'none',
            px: 3,
            py: 1,
          }}
        >
          <Logo />
        </Link>
      </div>
    </header>
  )
}
