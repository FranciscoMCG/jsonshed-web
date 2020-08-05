/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import useViewport from '../../hooks/useViewport'
import { Logo } from '../../components/graphics'
import { NavBar } from '../../components/navigation/Navbar'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSideNav, setIsSideNav] = useState(false)

  const { width, isDesktop, isMobile } = useViewport()
  return (
    <header
      sx={{
        variant: 'layout.header',
        ...(isOpen && { position: 'relative' }),
      }}
    >
      <NavBar
        isMobile={isMobile}
        isSideNav={isSideNav}
        setIsSideNav={setIsSideNav}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Link
        to="/"
        sx={{
          textDecoration: 'none',
          py: 1,
        }}
      >
        <Logo sx={{ variant: 'text.logoHeader' }} />
      </Link>
    </header>
  )
}
