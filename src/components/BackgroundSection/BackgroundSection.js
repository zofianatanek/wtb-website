import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import LogoIconSVG from "../LogoIconSVG"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  {
    file(name: { eq: "office" }) {
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

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(query)
  return (
    <BackgroundImage
      className={className}
      fluid={data.file.childImageSharp.fluid}
    >
      <BrandCardWrapper>
        <LogoIconSVG className="LogoIcon" />
        <div>
          <h3>Biuro Projektów</h3>
          <h1>WTB Telecom</h1>
        </div>
      </BrandCardWrapper>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  height: 60vh;
  display: flex;
  align-items: center;
`

export default StyledBackgroundSection
