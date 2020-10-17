import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { RightOutlined } from "@ant-design/icons"

const query = graphql`
  {
    image1Small: file(name: { eq: "telecom" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image2Small: file(name: { eq: "radio" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image3Small: file(name: { eq: "signs" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image1Big: file(name: { eq: "telecom" }) {
      childImageSharp {
        fixed(width: 580, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image2Big: file(name: { eq: "radio" }) {
      childImageSharp {
        fixed(width: 580, height: 326, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    image3Big: file(name: { eq: "signs" }) {
      childImageSharp {
        fixed(width: 580, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const ServicesWrapper = styled.section`
  padding: 40px;
`
const ServicesCategoriesWrapper = styled.section`
  margin: 40px 0;
  @media ${({ theme }) => theme.device.xs} {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 32px;
  }
  @media ${({ theme }) => theme.device.xl} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, auto);
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
    background-color: rgba(1, 1, 1, 0.6);
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
      @media ${({ theme }) => theme.device.sm} {
        height: 326px;
        width: 580px;
      }
      @media ${({ theme }) => theme.device.xl} {
        height: 204px;
        width: 380px;
      }
      h3 {
        text-align: center;
        font-size: 32px;
        margin: auto;
        width: auto;
        background-color: rgba(1, 1, 1, 0);
      }
    }
    .overlay {
      height: 204px;
      width: 380px;
      @media ${({ theme }) => theme.device.sm} {
        height: 326px;
        width: 580px;
      }
      @media ${({ theme }) => theme.device.xl} {
        height: 204px;
        width: 380px;
      }
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

const Services = () => {
  const data = useStaticQuery(query)
  const theme = useContext(ThemeContext)
  const imageTelecom = [
    data.image1Small.childImageSharp.fixed,
    {
      ...data.image1Big.childImageSharp.fixed,
      media: `(min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.xl})`,
    },
    {
      ...data.image1Small.childImageSharp.fixed,
      media: `${theme.device.xl}`,
    },
  ]
  const imageRadio = [
    data.image2Small.childImageSharp.fixed,
    {
      ...data.image2Big.childImageSharp.fixed,
      media: `(min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.xl})`,
    },
    {
      ...data.image2Small.childImageSharp.fixed,
      media: `${theme.device.xl}`,
    },
  ]
  const imageCivilEngineering = [
    data.image3Small.childImageSharp.fixed,
    {
      ...data.image3Big.childImageSharp.fixed,
      media: `(min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.xl})`,
    },
    {
      ...data.image3Small.childImageSharp.fixed,
      media: `${theme.device.xl}`,
    },
  ]
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
          <Img fixed={imageTelecom} />
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
          <Img fixed={imageRadio} />
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
          <Img fixed={imageCivilEngineering} />
        </ImgWrapper>
      </ServicesCategoriesWrapper>
    </ServicesWrapper>
  )
}

export default Services
