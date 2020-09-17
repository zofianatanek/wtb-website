import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { RightOutlined } from "@ant-design/icons"

const ServicesWrapper = styled.section`
  padding: 40px;
`
const ServicesCategoriesWrapper = styled.section`
  margin: 40px 0;
  @media ${({ theme }) => theme.device.xs} {
    display: flex;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.sm} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
`

const Title = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${({ theme }) => theme.colors.text.title};
    transition: 0.5s ease-in-out;
  }
  p {
    display: none;
  }
`

const Overlay = styled.div`
  background-color: #000000;
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
        color: ${({ theme }) => theme.colors.text.title};
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
  return (
    <ServicesWrapper>
      <h1>Sektory uslug</h1>
      <ServicesCategoriesWrapper className="services">
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
      </ServicesCategoriesWrapper>
    </ServicesWrapper>
  )
}

export default Services
