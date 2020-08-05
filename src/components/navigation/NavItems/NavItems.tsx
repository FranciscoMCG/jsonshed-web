/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

interface Props {
  isMobile: boolean
  isOpen: boolean
}

interface NavItem {
  title: string
  to: string
}

const navItems: NavItem[] = [
  { title: 'usage', to: '#usage' },
  { title: 'features', to: '#features' },
  { title: 'contribute', to: '#contribute' },
  { title: 'about', to: '#about' },
]

export default function NavItems({ isMobile, isOpen }: Props) {
  return (
    <React.Fragment>
      {navItems.map((item: NavItem, i) => (
        <Link
          key={i}
          to={item.to}
          sx={{
            ...(isMobile && isOpen && { variant: 'styles.sideNavItem' }),
            ...(!isMobile && {
              variant: 'styles.topNavItem',
            }),
          }}
        >
          {item.title}
        </Link>
      ))}
    </React.Fragment>
  )
}
