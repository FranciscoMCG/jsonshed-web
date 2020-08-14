import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'

test('renders a Footer', () => {
  const { getByText } = render(<Footer />)
  const copyright = getByText('© 2020 Francisco Gomes')
  expect(copyright).toBeInTheDocument()
})
