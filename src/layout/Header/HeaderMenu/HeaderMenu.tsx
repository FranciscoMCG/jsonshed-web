/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import styled from 'styled-components'

import { MenuIcon } from './MenuIcon'
import { Card } from '../../../components/surfaces/'
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    // color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  `

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <React.Fragment>
      <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <nav sx={{ variant: 'cards.menu' }}></nav>}
    </React.Fragment>
    // <MenuButton aria-label="Toggle Menu" />
    // <button
    //   title="Toggle Menu"
    //   sx={{
    //     appearance: 'none',
    //     width: 32,
    //     height: 32,
    //     m: 0,
    //     p: 1,
    //     color: 'inherit',
    //     bg: 'transparent',
    //     border: 0,
    //     ':focus': {
    //       outline: '2px dotted',
    //     },
    //     ':hover': {
    //       color: 'primary',
    //     },
    //   }}
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="24"
    //     height="24"
    //     fill="currentcolor"
    //     viewBox="0 0 24 24"
    //     sx={{
    //       display: 'block',
    //       margin: 0,
    //     }}
    //   >
    //     <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    //   </svg>
    // </button>
  )
}
