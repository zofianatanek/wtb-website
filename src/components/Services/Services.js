import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { RightOutlined } from "@ant-design/icons"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Header = styled.h1`
  color: #ecad1b;
  /* text-transform: uppercase; */
`
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 40px 0;
`

const Title = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  h3 {
    color: #ecad1b;
    transition: 0.5s ease-in-out;
  }
  p {
    display: none;
  }
`

const Overlay = styled.div`
  background-color: black;
  opacity: 70%;
  overflow: hidden;
  z-index: 1;
  width: 0;
  height: 0;
  position: absolute;
  transition: 0.5s ease-in-out;
`
const ImgWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  &:hover {
    .title {
      display: flex;
      margin: 0;
      width: 380px;
      height: 204px;
      h3 {
        text-align: center;
        font-size: 32px;
        margin: auto;
        width: auto;
      }
    }
    .overlay {
      height: 204px;
      width: 380px;
    }
    .more {
      display: block;
      text-align: right;
      .link {
        color: #ecad1b;
        margin: 12px;
      }
    }
  }
`
const query = graphql`
  {
    image1: file(name: { eq: "telecom" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(name: { eq: "radio" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
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
      <Header>Sektory uslug:</Header>
      <ServicesWrapper className="services">
        <ImgWrapper>
          <Overlay className="overlay"></Overlay>
          <Title className="title">
            <h3>Telekomunikacja</h3>
            <p className="more">
              <Link to="/offer" className="link">
                Wiecej <RightOutlined />
              </Link>
            </p>
          </Title>
          <Img fixed={data.image1.childImageSharp.fixed} />
        </ImgWrapper>
        <ImgWrapper>
          <Overlay className="overlay"></Overlay>
          <Title className="title">
            <h3>Sieci radiowe</h3>
            <p className="more">
              <Link to="/offer" className="link">
                Wiecej <RightOutlined />
              </Link>
            </p>
          </Title>
          <Img fixed={data.image2.childImageSharp.fixed} />
        </ImgWrapper>
        <ImgWrapper>
          <Overlay className="overlay"></Overlay>
          <Title className="title">
            <h3>Inżynieria Ruchu Drogowego</h3>
            <p className="more">
              <Link to="/offer" className="link">
                Wiecej <RightOutlined />
              </Link>
            </p>
          </Title>
          <Img fixed={data.image3.childImageSharp.fixed} />
        </ImgWrapper>
      </ServicesWrapper>

      {/* <img src={data.image1.childImageSharp.fluid.src} />
      <img src={data.image2.childImageSharp.fluid.src} /> */}
    </>
  )
}

export default Services
