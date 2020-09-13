import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Services from "../components/Services/Services"
import Resume from "../components/Resume/Resume"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"

const Content = styled.div`
  margin-left: 0;
`

const IndexPage = ({ data }) => (
  <>
    <BackgroundSection />
    <Content>
      <Services />
      <Resume />
    </Content>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "office" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 600, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
