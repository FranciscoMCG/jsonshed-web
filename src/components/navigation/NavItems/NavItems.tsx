/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links'

interface Props {
  isMobile: boolean
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
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

export default function NavItems({ isMobile, isOpen, setIsOpen }: Props) {
  return (
    <React.Fragment>
      {navItems.map((item: NavItem, i) => (
        <Link
          key={i}
          to={`/${item.to}`}
          sx={{
            variant: 'none',
            ...(isMobile && isOpen && { variant: 'styles.sideNavItem' }),
            ...(!isMobile && {
              variant: 'styles.topNavItem',
            }),
          }}
        >
          {' '}
          <button
            sx={{
              padding: 0,
              border: 'none',
              outline: 'none',
              font: 'inherit',
              color: 'inherit',
              background: 'none',
            }}
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </button>
        </Link>
      ))}
    </React.Fragment>
  )
}
