import React from "react"
import styled from "styled-components"

import colors from "../styles/colors"
import { Header, Footer } from "../Layout/"
import Main from "./Main"
import { SEO } from "../components/config"

const AppContainer = styled.div`
  background-color: ${colors.bg};
  width: 100vw;
  font-family: "Comfortaa";
`

export default function App() {
  return (
    <AppContainer>
      <SEO title="Home" />
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  )
}
