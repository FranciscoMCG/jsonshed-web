/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

import { Logo } from '../../components/graphics'

export default function Header() {
  return (
    <header
      sx={{
        variant: 'layout.header',
      }}
    >
      <button
        title="Toggle Menu"
        sx={{
          appearance: 'none',
          width: 32,
          height: 32,
          m: 0,
          p: 1,
          color: 'inherit',
          bg: 'transparent',
          border: 0,
          ':focus': {
            outline: '2px dotted',
          },
          ':hover': {
            color: 'primary',
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentcolor"
          viewBox="0 0 24 24"
          sx={{
            display: 'block',
            margin: 0,
          }}
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
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
