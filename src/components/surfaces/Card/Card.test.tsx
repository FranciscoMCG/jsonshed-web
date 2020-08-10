import React from 'react'
import { render } from '@testing-library/react'

import Card from './Card'

test('renders a Card', () => {
  const { container } = render(<Card />)
  expect(container.innerHTML).toBeTruthy()
})
