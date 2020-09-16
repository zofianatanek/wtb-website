import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  width: 500px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`

const query = graphql`
  {
    orange: file(name: { eq: "orange" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tauron: file(name: { eq: "tauron" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    netia: file(name: { eq: "netia" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mx3: file(name: { eq: "mx3" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ecs: file(name: { eq: "ecs" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nexotech: file(name: { eq: "nexotech" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    teltech: file(name: { eq: "teltech" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    syscom: file(name: { eq: "syscom" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Partners = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <h1>Partnerzy</h1>
      <ImageWrapper>
        <Img fixed={data.orange.childImageSharp.fixed} />
        <Img fixed={data.tauron.childImageSharp.fixed} />
        <Img fixed={data.netia.childImageSharp.fixed} />
        <Img fixed={data.mx3.childImageSharp.fixed} />
        <Img fixed={data.ecs.childImageSharp.fixed} />
        <Img fixed={data.nexotech.childImageSharp.fixed} />
        <Img fixed={data.teltech.childImageSharp.fixed} />
        <Img fixed={data.syscom.childImageSharp.fixed} />
      </ImageWrapper>
    </>
  )
}

export default Partners
