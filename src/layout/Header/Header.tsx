/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links'

import { Logo } from '../../components/graphics'
import { NavBar } from '../../components/navigation/Navbar'
import useViewport from '../../hooks/useViewport'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useViewport()

  return (
    <header
      sx={{
        variant: 'layout.header.mobile',
        ...(!isMobile && { variant: 'layout.header.desktop' }),
      }}
    >
      <NavBar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />

      <Link
        to="/#home"
        sx={{
          textDecoration: 'none',
          py: 1,
          justifySelf: 'center',
        }}
      >
        <Logo sx={{ variant: 'styles.h3', color: 'primary' }} />
      </Link>
    </header>
  )
}
