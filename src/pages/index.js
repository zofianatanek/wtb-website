import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import LogoIconSVG from "../components/LogoIconSVG"
import Services from "../components/Services/Services"

const ImageWrapper = styled.div`
  margin: 0 !important;
  width: 100%;
  height: 60vh;
  background-image: url(${({ image }) => image});
  background-size: cover;
`

const DescriptionWrapper = styled.div`
  height: 100%;
  display: flex;
  margin-left: 200px;
  h1 {
    margin: auto 0;
  }
`
const Content = styled.div``

const IndexPage = ({ data }) => (
  <>
    <ImageWrapper image={data.file.childImageSharp.fluid.src}>
      {" "}
      <DescriptionWrapper>
        <LogoIconSVG width="200px" height="auto" />
        <h1>WTB Telecom</h1>
      </DescriptionWrapper>
    </ImageWrapper>
    <Content>
      <Services />
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
