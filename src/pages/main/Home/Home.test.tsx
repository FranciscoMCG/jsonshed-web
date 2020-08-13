import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import Home from './Home'

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

test('renders HomeSection', () => {
  const { container } = render(<Home />)
  expect(container.innerHTML).toBeTruthy()
})
