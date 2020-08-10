import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Navbar from './Navbar'

describe('<Navbar />', () => {
  let renderNavbar: RenderResult

  describe('by default', () => {
    beforeEach(() => {
      renderNavbar = render(
        <Navbar
          isMobile={true}
          setIsSideNav={jest.fn()}
          isOpen={false}
          setIsOpen={jest.fn()}
        />
      )
    })
    it('renders Navbar by default', () => {
      const { container } = renderNavbar
      expect(container.innerHTML).toBeTruthy()
    })
  })

  describe('when it is mobile and it is closed', () => {
    beforeEach(() => {
      renderNavbar = render(
        <Navbar
          isMobile={true}
          setIsSideNav={jest.fn()}
          isOpen={false}
          setIsOpen={jest.fn()}
        />
      )
    })
    it('renders a burguer icon', () => {
      const { getByLabelText } = renderNavbar
      const burguer = getByLabelText('Toggle Menu')
      expect(burguer).toBeInTheDocument()
    })
  })

  describe('when it is mobile and it is open', () => {
    beforeEach(() => {
      renderNavbar = render(
        <Navbar
          isMobile={true}
          setIsSideNav={jest.fn()}
          isOpen={true}
          setIsOpen={jest.fn()}
        />
      )
    })
    it('renders a Close button', () => {
      const { getByLabelText } = renderNavbar
      const navItems = getByLabelText('Close')
      expect(navItems).toBeInTheDocument()
    })
  })
})
