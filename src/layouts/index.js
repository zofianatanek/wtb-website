import React from "react"
import { Layout } from "antd"
import styled, { ThemeProvider } from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/GlobalStyle"
import DefaultFooter from "../components/Footer/Footer"
import { theme } from "../utils/theme"

const { Footer, Content } = Layout

const StyledContent = styled(Content)`
  background-color: ${({ theme }) => theme.colors.background.primary};
  margin-top: 72px;
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Layout>
        <Navigation />
        <StyledContent>{children}</StyledContent>
        <Footer>
          <DefaultFooter />
        </Footer>
      </Layout>
    </>
  </ThemeProvider>
)

export default MainLayout
