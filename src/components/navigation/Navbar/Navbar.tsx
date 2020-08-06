/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx } from 'theme-ui'

import { NavItems } from '../NavItems'
import { NavIcons } from '../NavIcons'

interface Props {
  isMobile: boolean
  setIsSideNav: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavBar({
  isMobile,
  setIsSideNav,
  isOpen,
  setIsOpen,
}: Props) {
  useEffect(() => {
    if (isMobile) setIsSideNav(true)
  }, [isMobile])

  return (
    <React.Fragment>
      {isMobile && <NavIcons isOpen={isOpen} setIsOpen={setIsOpen} />}

      <nav
        sx={{
          ...(isMobile && !isOpen && { display: 'none' }),
          ...(isMobile && isOpen && { variant: 'styles.sideNav' }),
          ...(!isMobile && {
            variant: 'styles.topNav',
          }),
          zIndex: 1,
          top: 0,
          left: 0,
        }}
      >
        <NavItems isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </React.Fragment>
  )
}
