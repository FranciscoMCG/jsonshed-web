import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import UsageSection from './UsageSection'

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

test('renders UsageSection', () => {
  const { container } = render(<UsageSection />)
  expect(container.innerHTML).toBeTruthy()
})
