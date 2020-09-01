import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Header = styled.h2`
  color: #ecad1b;
`
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`
const ImgWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  &:hover {
    p {
      max-width: 380px;
      font-size: 32px;
    }
  }
`
const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: #ecad1b;
  margin-top: 8px;
  margin-left: 8px;
  position: absolute;
  z-index: 1;
  p {
    margin: 0;
  }
`

const query = graphql`
  {
    image1: file(name: { eq: "telecom" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    image2: file(name: { eq: "radio" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image3: file(name: { eq: "signs" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <>
      <Header>Sektory usług:</Header>
      <ServicesWrapper>
        <ImgWrapper>
          <Title>
            <p>Telekomunikacja</p>
          </Title>
          <Img fixed={data.image1.childImageSharp.fixed} />
        </ImgWrapper>
        <ImgWrapper>
          <Title>
            <p>Sieci radiowe</p>
          </Title>
          <Img fixed={data.image2.childImageSharp.fixed} />
        </ImgWrapper>
        <ImgWrapper>
          <Title>
            <p>Inżynieria Ruchu Drogowego</p>
          </Title>
          <Img
            fixed={data.image3.childImageSharp.fixed}
            backgroundColor="red"
          />
        </ImgWrapper>
      </ServicesWrapper>

      {/* <img src={data.image1.childImageSharp.fluid.src} />
      <img src={data.image2.childImageSharp.fluid.src} /> */}
    </>
  )
}

export default Services
