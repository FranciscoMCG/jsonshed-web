import React from "react"
import styled from "styled-components"

import LogoSection from "./sections/LogoSection/LogoSection"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  margin: 4rem 0rem;
  width: 100%;
  height: 200px;
`

export default function Main() {
  return (
    <MainContainer>
      <LogoSection />
    </MainContainer>
  )
}
