import React from 'react'
import { render } from '@testing-library/react'

import Logo from './Logo'

test('renders a Logo', () => {
  const { container } = render(<Logo />)
  expect(container.innerHTML).toBeTruthy()
})
