import React from "react"
import styled from "styled-components"

interface Props {
  header?: string
  main?: string
}

const StyledLogo = styled.h1<Props>`
  font-family: "Jacques Francois Shadow";
  font-size: ${props => props.header && "1.3rem"};
  font-size: ${props => props.main && "2.8rem"};
`

export default function Logo(props) {
  const { children } = props

  return <StyledLogo {...props}>{children}</StyledLogo>
}
