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
  { title: 'docs', to: 'docs/' },
  { title: 'about', to: '#about' },
  { title: 'contribute', to: '#contribute' },
]

export default function NavItems({ isMobile, isOpen, setIsOpen }: Props) {
  const items = isMobile
    ? [{ title: 'home', to: '#home' }, ...navItems]
    : navItems

  return (
    <React.Fragment>
      {items.map((item: NavItem, i) => (
        <Link
          key={i}
          to={`/${item.to}`}
          sx={{
            variant: 'none',
            fontFamily: 'body',
            textDecoration: 'none',
            ...(isMobile && isOpen && { variant: 'styles.sideNavItem' }),
            ...(!isMobile && {
              variant: 'styles.topNavItem',
            }),
          }}
        >
          <button
            sx={{ variant: 'buttons.styleNone' }}
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </button>
        </Link>
      ))}
      <a
        href="https://github.com/FranciscoMCG/jsonshed"
        target="_blank"
        rel="noreferrer"
        onClick={() => setIsOpen(false)}
        sx={{
          variant: 'none',
          ...(isMobile && isOpen && { variant: 'styles.sideNavItem' }),
          ...(!isMobile && {
            variant: 'styles.topNavItem',
          }),
        }}
      >
        github
      </a>
    </React.Fragment>
  )
}
