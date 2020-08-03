import React from "react"
import styled from "styled-components"

import { Logo } from "../../../../components/graphics"
import { ContainerBackground } from "../../../../components/surfaces"

const SubTitle = styled.h3`
  margin-top: 0.4rem;
  font-size: 0.9rem;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff78c;
  width: 80%;
  border: solid 1px black;
  padding: 0.8rem;
  -webkit-box-shadow: 10px 10px 0px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 0px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 0px -5px rgba(0, 0, 0, 0.75);
`

export default function LogoSection() {
  return (
    <>
      <ContainerBackground />
      <LogoContainer>
        <Logo main>JSONSHED</Logo>
        <SubTitle>a fake api for testing and prototyping</SubTitle>
      </LogoContainer>
    </>
  )
}
