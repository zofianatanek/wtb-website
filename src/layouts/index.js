import React, { useCallback } from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "../utils/theme"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
  }
`

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

const MainLayout = ({ children }) => {
  const data = useStaticQuery(query)
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        ></meta>
        <meta name="keywords" content={data.site.siteMetadata.keywords}></meta>
        <meta property="og:title" content={data.site.siteMetadata.title}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        ></meta>
        <meta property="og:image" content=""></meta>
        <meta property="og:locale" content="pl_PL"></meta>
        <meta property="og:url" content=""></meta>
        <link rel="canonical" href="" />
      </Helmet>
      <>
        <GlobalStyle />
        <Navigation />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default MainLayout
