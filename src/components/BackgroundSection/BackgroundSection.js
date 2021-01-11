import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import LogoIconSVG from "../SVGs/LogoIconSVG"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  {
    backgroundDesktop: file(name: { eq: "office" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundMobile: file(name: { eq: "officeMobile" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BrandWrapper = styled.section`
  margin-bottom: 60px;
  @media ${({ theme }) => theme.device.xxs} {
    display: flex;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.md} {
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding: 20vh;
  }
`

const Logo = styled(LogoIconSVG)`
  @media ${({ theme }) => theme.device.xxs} {
    width: 150px;
    height: auto;
    margin-right: 10px;
  }
  @media ${({ theme }) => theme.device.md} {
    width: 240px;
    height: auto;
  }
`

const Brand = styled.div`
  @media ${({ theme }) => theme.device.xxs} {
    margin-left: 10px;
    h3 {
      font-size: 16px;
      text-align: center;
      margin: 0;
    }
    h1 {
      font-size: 24px;
      font-weight: normal;
      color: inherit;
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.device.md} {
    h3 {
      font-size: 24px;
      text-align: center;
    }
    h1 {
      font-size: 32px;
      font-weight: normal;
      color: inherit;
    }
  }
`
const StyledBackgroundImage = styled(BackgroundImage)`
  height: 60vh;
  @media ${({ theme }) => theme.device.xxs} {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  @media ${({ theme }) => theme.device.md} {
    display: flex;
    justify-content: left;
  }
  @media ${({ theme }) => theme.device.lg} {
    display: flex;
    align-items: center;
    justify-content: left;
  }
`

const BackgroundSection = () => {
  const data = useStaticQuery(query)
  const theme = useContext(ThemeContext)
  const sources = [
    data.backgroundMobile.childImageSharp.fluid,
    {
      ...data.backgroundDesktop.childImageSharp.fluid,
      media: `${theme.device.md}`,
    },
  ]
  return (
    <StyledBackgroundImage fluid={sources}>
      <BrandWrapper>
        <Logo />
        <Brand>
          <h3>Biuro Projektów</h3>
          <h1>WTB Telecom</h1>
        </Brand>
      </BrandWrapper>
    </StyledBackgroundImage>
  )
}

export default BackgroundSection
