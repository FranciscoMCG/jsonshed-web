import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'

test('renders a Header', () => {
  const { container } = render(<Header />)
  expect(container.innerHTML).toBeTruthy()
})
