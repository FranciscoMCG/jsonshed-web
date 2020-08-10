import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Main from './Main'

describe('<Main />', () => {
  let renderMain: RenderResult

  beforeEach(() => {
    renderMain = render(<Main />)
  })
  it('renders Main', () => {
    const { container } = renderMain
    expect(container.innerHTML).toBeTruthy()
  })
  it('renders children components', () => {
    const home = document.getElementById('home')

    expect(home).toBeInTheDocument()
  })
  it('renders children components', () => {
    const about = document.getElementById('about')

    expect(about).toBeInTheDocument()
  })
  it('renders children components', () => {
    const usage = document.getElementById('usage')

    expect(usage).toBeInTheDocument()
  })
  it('renders children components', () => {
    const features = document.getElementById('features')

    expect(features).toBeInTheDocument()
  })
  it('renders children components', () => {
    const contribute = document.getElementById('contribute')

    expect(contribute).toBeInTheDocument()
  })
})
