/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import { Logo } from '../../graphics'
import { NavBar } from '../../navigation/Navbar'
import useViewport from '../../../hooks/useViewport'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useViewport()

  return (
    <header
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        px: 3,
        alignItems: 'center',
        variant: 'layout.header.mobile',
        zIndex: 2,
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
        <Logo
          sx={{
            variant: 'styles.h2',
            color: 'primary',
            '&:hover': {
              color: 'secondary',
              cursor: 'pointer',
            },
          }}
        />
      </Link>
    </header>
  )
}
