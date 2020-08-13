import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import AboutSection from './AboutSection'

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
  const { container } = render(<AboutSection />)
  expect(container.innerHTML).toBeTruthy()
})
