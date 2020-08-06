/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links'

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
      }}
    >
      <NavBar
        isMobile={isMobile}
        setIsSideNav={setIsSideNav}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Link
        to="/#home"
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
