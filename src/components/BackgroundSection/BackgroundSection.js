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

const BrandCardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20vh;
  .LogoIcon {
    max-width: 240px;
  }
  div {
    margin-left: 28px;
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
  display: flex;
  align-items: center;
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
      <BrandCardWrapper>
        <LogoIconSVG className="LogoIcon" />
        <div>
          <h3>Biuro Projektów</h3>
          <h1>WTB Telecom</h1>
        </div>
      </BrandCardWrapper>
    </StyledBackgroundImage>
  )
}

export default BackgroundSection
