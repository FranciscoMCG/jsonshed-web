import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"

const FooterContainer = styled.footer`
  display: flex;
  margin: 0;
  height: 3rem;
  border-top: ${colors.black} 2px dotted;
  padding: 0.7rem;
  align-items: center;
`

export default function Footer() {
  return <FooterContainer>Footer</FooterContainer>
}
