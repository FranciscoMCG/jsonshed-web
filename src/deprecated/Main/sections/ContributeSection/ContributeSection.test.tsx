import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import ContributeSection from './ContributeSection'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: 'Francisco Gomes',
      description: 'My description',
      title: 'My Title',
    },
  },
}))

test('renders ContributeSection', () => {
  const { container } = render(<ContributeSection />)
  expect(container.innerHTML).toBeTruthy()
})
