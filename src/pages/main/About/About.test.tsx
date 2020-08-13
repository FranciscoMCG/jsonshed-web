import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import About from './About'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: 'Francisco',
      description: 'My description',
      title: 'My Title',
    },
  },
}))

test('renders AboutSection', () => {
  const { container } = render(<About />)
  expect(container.innerHTML).toBeTruthy()
})
