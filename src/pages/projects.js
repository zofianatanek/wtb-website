import React from "react"
import { graphql } from "gatsby"
import Project from "../components/Project/ProjectSection"
import projects from "../components/Project/ProjectsData"

const ProjectsPage = ({ data }) => {
  const sources = [
    data.gsmr.childImageSharp.fluid,
    data.popc.childImageSharp.fluid,
    data.fttx.childImageSharp.fluid,
    data.dss.childImageSharp.fluid,
    data.radio.childImageSharp.fluid,
  ]
  return (
    <>
      <Project
        color="grey"
        title={projects[0].title}
        description={projects[0].description}
        details={projects[0].details}
        image={sources[0]}
      ></Project>
      <Project
        reverse
        color="gold"
        title={projects[1].title}
        description={projects[1].description}
        image={sources[1]}
      ></Project>
      <Project
        color="gold"
        title={projects[2].title}
        description={projects[2].description}
        image={sources[2]}
      ></Project>
      <Project
        reverse
        color="grey"
        title={projects[3].title}
        description={projects[3].description}
        image={sources[3]}
      ></Project>
      <Project
        color="grey"
        title={projects[4].title}
        description={projects[4].description}
        image={sources[4]}
      ></Project>
    </>
  )
}
export const query = graphql`
  {
    gsmr: file(name: { eq: "gsmr" }) {
      childImageSharp {
        fluid(maxWidth: 672, maxHeight: 448, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    popc: file(name: { eq: "popc" }) {
      childImageSharp {
        fluid(maxWidth: 672, maxHeight: 448, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fttx: file(name: { eq: "fttx" }) {
      childImageSharp {
        fluid(maxWidth: 672, maxHeight: 448, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dss: file(name: { eq: "dss" }) {
      childImageSharp {
        fluid(maxWidth: 672, maxHeight: 488, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    radio: file(name: { eq: "radio" }) {
      childImageSharp {
        fluid(maxWidth: 491, maxHeight: 736, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ProjectsPage
