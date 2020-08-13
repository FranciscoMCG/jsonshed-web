import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import HomeSection from './HomeSection'

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
  const { container } = render(<HomeSection />)
  expect(container.innerHTML).toBeTruthy()
})
