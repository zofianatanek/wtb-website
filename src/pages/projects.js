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
    data.its.childImageSharp.fluid,
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
        details={projects[1].details}
        image={sources[1]}
      ></Project>
      <Project
        color="gold"
        title={projects[2].title}
        description={projects[2].description}
        details={projects[2].details}
        image={sources[2]}
      ></Project>
      <Project
        reverse
        color="grey"
        title={projects[3].title}
        description={projects[3].description}
        subtitle={projects[3].details.subtitle}
        list={projects[3].details.list}
        image={sources[3]}
      ></Project>
      <Project
        color="grey"
        title={projects[4].title}
        description={projects[4].description}
        image={sources[4]}
      ></Project>
      <Project
        reverse
        color="gold"
        title={projects[5].title}
        description={projects[5].description}
        details={projects[5].details}
        image={sources[5]}
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

    its: file(name: { eq: "its" }) {
      childImageSharp {
        fluid(maxWidth: 672, maxHeight: 488, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ProjectsPage
