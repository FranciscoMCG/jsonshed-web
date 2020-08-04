/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

// const StyledLogo = styled.h1<Props>`
//   font-family: 'Jacques Francois Shadow';
//   font-size: ${props => props.header && '1.3rem'};
//   font-size: ${props => props.main && '2.8rem'};
// `

export default function Logo() {
  return <h1 sx={{ variant: 'text.logo' }}>JSONSHED</h1>
}
