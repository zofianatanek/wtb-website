import React from "react"
import { Layout } from "antd"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/GlobalStyle"

const { Footer, Content } = Layout

const StyledContent = styled(Content)`
  background-color: #ffffff;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Layout>
      <Navigation />
      <StyledContent>{children}</StyledContent>
      <Footer>Footer</Footer>
    </Layout>
  </>
)

export default MainLayout
