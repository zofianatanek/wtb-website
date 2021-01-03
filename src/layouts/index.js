import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {

    margin: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    color: ${({ theme }) => theme.colors.text.primary}
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-weight: bold;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.text.title};
  }
  a {
    text-decoration: none;
  }
`

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
