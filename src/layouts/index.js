import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Footer from "../components/Footer/Footer"
import { theme } from "../utils/theme"

// const StyledContent = styled(Content)`
//   background-color: ${({ theme }) => theme.colors.background.primary};
//   margin-top: 72px;
// `

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navigation />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

export default MainLayout
