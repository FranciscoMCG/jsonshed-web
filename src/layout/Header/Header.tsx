import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"
import { Logo } from "../../components/graphics"

const HeaderContainer = styled.header`
  display: flex;
  overflow: hidden;
  position: sticky;
  top: 0;
  margin: 0;
  width: 100%;
  height: 4rem;
  align-items: center;
  border-bottom: ${colors.black} 2px dotted;
`

const BackgroundContainer = styled.div`
  line-height: 2rem;
  padding: 0.7rem;
`

const Left = styled.div`
  width: 30%;
`

const Center = styled.div`
  position: relative;
  width: 40%;
  text-align: center;
`

const Right = styled.div`
  width: 30%;
`

const Link = styled.h3`
  font-size: 1.6rem;
  margin: 0.7rem;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Left>menu</Left>
      <Center>
        <Logo header>JSONSHED</Logo>
      </Center>
      <Right />
    </HeaderContainer>
  )
}
