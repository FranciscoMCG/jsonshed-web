import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'

import Contribute from './Contribute'

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
  const { container } = render(<Contribute />)
  expect(container.innerHTML).toBeTruthy()
})
