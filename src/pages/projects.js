import React from "react"
import { graphql } from "gatsby"
import Project from "../components/Project/ProjectSection"
import projects from "../components/Project/ProjectsData"

const ProjectsPage = ({ data }) => {
  const sources = [
    data.gsmr.childImageSharp.fixed,
    data.popc.childImageSharp.fixed,
    data.fttx.childImageSharp.fixed,
    data.dss.childImageSharp.fixed,
    data.radio.childImageSharp.fixed,
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
        fixed(width: 672, height: 448, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    popc: file(name: { eq: "popc" }) {
      childImageSharp {
        fixed(width: 672, height: 448, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fttx: file(name: { eq: "fttx" }) {
      childImageSharp {
        fixed(width: 672, height: 448, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dss: file(name: { eq: "dss" }) {
      childImageSharp {
        fixed(width: 672, height: 488, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    radio: file(name: { eq: "radio" }) {
      childImageSharp {
        fixed(width: 491, height: 736, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default ProjectsPage
