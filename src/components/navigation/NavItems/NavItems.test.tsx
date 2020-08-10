import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import NavItems from './NavItems'

describe('<NavItems />', () => {
  let renderNavItems: RenderResult

  describe('by default', () => {
    beforeEach(() => {
      renderNavItems = render(
        <NavItems isMobile={true} isOpen={true} setIsOpen={jest.fn()} />
      )
    })

    it('renders NavItems', () => {
      const { container } = renderNavItems

      expect(container.innerHTML).toBeTruthy()
    })
  })
})
