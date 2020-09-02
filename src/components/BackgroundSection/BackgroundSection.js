import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

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

const BackgroundSection = () => {
  const data = useStaticQuery(query)
  return (
    <BackgroundImage
      className="backgroundImg"
      fluid={data.file.childImageSharp.fluid}
      style={{ height: "60vh" }}
    >
      <h1>WTB</h1>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  .backgroundImg {
    height: 60vh;
  }
`

export default StyledBackgroundSection
