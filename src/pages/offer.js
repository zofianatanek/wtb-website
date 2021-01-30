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
  background-color: black;
  @media ${({ theme }) => theme.device.xxs} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.xl} {
    flex-direction: row;
  }
`
const StyledImg = styled(Img)`
  transition: height 1.5s;
  @media ${({ theme }) => theme.device.xxs} {
    height: calc((100vh - 72px) / 3);
    width: calc(100vw);
  }
  @media ${({ theme }) => theme.device.xl} {
    height: calc(100vh - 72px);
    width: calc(100vw / 3);
    margin: auto 0;
  }
`
const Overlay = styled.div`
  background-color: rgba(236, 173, 27, 0.7);
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: height 1.5s;
  @media ${({ theme }) => theme.device.xxs} {
    width: 100%;
    height: 50px;
  }
  @media ${({ theme }) => theme.device.xl} {
    width: calc(100vw / 3);
    height: 200px;
    bottom: ${props => (props.bottom ? 0 : "initial")};
  }
`
const OverlayContent = styled.div`
  display: none;
  width: 100%;
  font-weight: 600;
  padding: 0 20px;
  flex-direction: column;
  transition: height 1.5s;
  ul {
    margin: 0 20px;
    li {
      line-height: 32px;
    }
    ul {
      margin: 0 20px;
    }
  }
`

const ImageWrapper = styled.div`
  @media ${({ theme }) => theme.device.xxs} {
    display: flex;
    justify-content: center;
    width: 100vw;
    &:hover {
      height: 100vh;
      ${Overlay} {
        height: inherit;
      }
      ${StyledImg} {
        height: inherit;
      }
      ${OverlayContent} {
        display: flex;
      }
    }
  }
  @media ${({ theme }) => theme.device.xl} {
    margin: auto 0;
    height: calc(100vh - 72px);
    width: calc(100vw / 3);
    &:hover {
      height: calc(100vh - 72px);
      ${Overlay} {
        height: 100%;
      }
      ${OverlayContent} {
        display: flex;
      }
    }
  }
`

const OfferPage = ({ data }) => (
  <>
    <Wrapper>
      <ImageWrapper>
        <Overlay>
          <h2>Telekomunikacja Liniowa</h2>
          <OverlayContent>
            <h4>Oferujemy:</h4>
            <ul>
              <li>Koncepcyjne projekty techniczno-ekonomiczne.</li>
              <li>Opracowania projektowe w zakresie:</li>
              <ul>
                <li>Projektów wykonawczych.</li>
                <li>Projektów budowlanych.</li>
                <li>Pozyskiwania uzgodnień administracyjnych.</li>
                <li>Dokumentacji powykonawczej.</li>
              </ul>
              <li>Projekty specjalistyczne:</li>
              <ul>
                <li>Skrzyżowania z linią kolejową.</li>
                <li>Operaty wodnoprawne.</li>
              </ul>
              <li>
                Obliczenia wytrzynałości mechanicznej słupów telekomunikacyjnych
                i energetycznych.
              </li>
            </ul>
          </OverlayContent>
        </Overlay>

        <StyledImg
          fluid={data.fibre.childImageSharp.fluid}
          alt="foto"
        ></StyledImg>
      </ImageWrapper>
      <ImageWrapper>
        <Overlay bottom>
          <h2>Inżynieria Ruchu Drogowego</h2>
          <OverlayContent>
            <h4>Wykonujemy:</h4>
            <ul>
              <li>Projekty Czasowej Organizacji Ruchu</li>
              <li>Projekty Odbudowy Nawierzchni</li>
            </ul>
          </OverlayContent>
        </Overlay>
        <StyledImg
          fluid={data.roads.childImageSharp.fluid}
          alt="foto"
        ></StyledImg>
      </ImageWrapper>
      <ImageWrapper>
        <Overlay>
          <h2>Sieci Radiowe</h2>
          <OverlayContent>
            <h4>Oferujemy:</h4>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </OverlayContent>
        </Overlay>
        <StyledImg
          fluid={data.radio.childImageSharp.fluid}
          alt="foto"
        ></StyledImg>
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
