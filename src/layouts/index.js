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
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
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
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text.title};
    font-size: 24px;
  }
  h2 {
    font-size: 21px;
  }
  h3 {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: inherit;
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
