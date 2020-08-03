import React from "react"
import styled from "styled-components"

import colors from "../styles/colors"
import Header from "../Layout/Header/Header"
import Main from "./Main"
import Footer from "../Layout/Footer/Footer"
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
