import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100vw;
  position: relative;
  @media ${({ theme }) => theme.device.xxs} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.xl} {
    flex-direction: row;
  }
`
const Overlay = styled.div`
  background-color: rgba(236, 173, 27, 0.7);
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 1.5s;
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    height: 50px;
  }
  @media ${({ theme }) => theme.device.xl} {
    width: calc(100vw / 3);
    height: 200px;
    bottom: ${props => (props.bottom ? 0 : "initial")};
  }
`
const ImageWrapper = styled.div`
  @media ${({ theme }) => theme.device.xxs} {
    display: flex;
    justify-content: center;
    width: 100vw;
    &:hover {
      ${Overlay} {
        height: calc((100vh - 72px) / 3);
      }
    }
  }
  @media ${({ theme }) => theme.device.xl} {
    margin: auto 0;
    height: calc(100vh - 72px);
    width: calc(100vw / 3);
    &:hover {
      ${Overlay} {
        height: 100%;
      }
    }
  }
`
const StyledImg = styled(Img)`
  @media ${({ theme }) => theme.device.xxs} {
    height: calc((100vh - 72px) / 3);
    width: calc(100vw);
  }
  @media ${({ theme }) => theme.device.xl} {
    height: calc(100vh - 72px);
    width: calc(100vw / 3);
    margin: auto 0;
    height: calc(100vh - 72px);
  }
`

const OfferPage = ({ data }) => (
  <>
    <Wrapper>
      <ImageWrapper>
        <Link to="/telecomOffer">
          <Overlay>
            <h2>Telekomunikacja Liniowa</h2>
          </Overlay>

          <StyledImg
            fluid={data.fibre.childImageSharp.fluid}
            alt="foto"
          ></StyledImg>
        </Link>
      </ImageWrapper>
      <ImageWrapper>
        <Link to="/radioOffer">
          <Overlay bottom>
            <h2>Inżynieria Ruchu Drogowego</h2>
          </Overlay>
          <StyledImg
            fluid={data.roads.childImageSharp.fluid}
            alt="foto"
          ></StyledImg>
        </Link>
      </ImageWrapper>
      <ImageWrapper>
        <Link to="/civilengOffer">
          <Overlay>
            <h2>Sieci Radiowe</h2>
          </Overlay>
          <StyledImg
            fluid={data.radio.childImageSharp.fluid}
            alt="foto"
          ></StyledImg>
        </Link>
      </ImageWrapper>
    </Wrapper>
  </>
)

export const query = graphql`
  {
    fibre: file(name: { eq: "fibre" }) {
      childImageSharp {
        fluid(maxWidth: 2848, maxHeight: 4288, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    roads: file(name: { eq: "roads" }) {
      childImageSharp {
        fluid(maxWidth: 2848, maxHeight: 4288, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    radio: file(name: { eq: "radio" }) {
      childImageSharp {
        fluid(maxWidth: 2848, maxHeight: 4288, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default OfferPage
