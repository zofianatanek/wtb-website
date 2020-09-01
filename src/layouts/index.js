import React from "react"
import { Layout } from "antd"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/GlobalStyle"

const { Header, Footer, Content } = Layout

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Layout>
      <Navigation />
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
)

export default MainLayout
