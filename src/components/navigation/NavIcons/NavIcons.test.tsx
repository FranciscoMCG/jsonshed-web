import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import NavIcons from './NavIcons'

describe('<NavIcons />', () => {
  let renderNavIcons: RenderResult

  describe('by default', () => {
    beforeEach(() => {
      renderNavIcons = render(<NavIcons isOpen={false} setIsOpen={jest.fn()} />)
    })
    it('renders a NavIcons component', () => {
      const { container } = renderNavIcons

      expect(container.innerHTML).toBeTruthy()
    })
  })

  describe('when it is open', () => {
    beforeEach(() => {
      renderNavIcons = render(<NavIcons isOpen={true} setIsOpen={jest.fn()} />)
    })
    it('renders a close icon', () => {
      const { getByLabelText } = renderNavIcons
      const close = getByLabelText('Close')
      expect(close).toBeInTheDocument()
    })
  })

  describe('when it is closed', () => {
    beforeEach(() => {
      renderNavIcons = render(<NavIcons isOpen={false} setIsOpen={jest.fn()} />)
    })
    it('renders a burguer icon', () => {
      const { getByLabelText } = renderNavIcons
      const burguer = getByLabelText('Toggle Menu')
      expect(burguer).toBeInTheDocument()
    })
  })
})
