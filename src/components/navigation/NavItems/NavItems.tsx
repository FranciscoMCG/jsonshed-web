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
  { title: 'about', to: '#about' },
  { title: 'usage', to: '#usage' },
  { title: 'features', to: '#features' },
  { title: 'contribute', to: '#contribute' },
]

const mobileNavItems: NavItem[] = [{ title: 'home', to: '#home' }, ...navItems]

const buttonStyle = {
  padding: 0,
  border: 'none',
  outline: 'none',
  font: 'inherit',
  color: 'inherit',
  background: 'none',
}
export default function NavItems({ isMobile, isOpen, setIsOpen }: Props) {
  const items = isMobile ? mobileNavItems : navItems
  return (
    <React.Fragment>
      {items.map((item: NavItem, i) => (
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
          <button sx={buttonStyle} onClick={() => setIsOpen(false)}>
            {item.title}
          </button>
        </Link>
      ))}
      <a
        href="https://github.com/FranciscoMCG/jsonshed"
        target="_blank"
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
