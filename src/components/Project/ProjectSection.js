import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    file(name: { eq: "gsmr" }) {
      childImageSharp {
        fixed(width: 380, height: 204, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const ProjectWrapper = styled.section`
  width: 100vw;
  background-color: ${props =>
    props.color === "gold"
      ? ({ theme }) => theme.colors.background.gold
      : ({ theme }) => theme.colors.background.dark};
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  .description {
    align-self: center;
    max-width: 60%;
    margin: 80px 40px;
    color: ${props =>
      props.color === "gold"
        ? "white"
        : ({ theme }) => theme.colors.text.primary};
    h2 {
      color: ${props =>
        props.color === "gold"
          ? "white"
          : ({ theme }) => theme.colors.text.primary};
      font-weight: bold;
    }
    p {
      text-align: justify;
    }
  }
`

/* ${({ theme }) => theme.colors.background.gold}; */
const Project = ({ color, title, description, image, reverse, details }) => {
  const data = useStaticQuery(query)
  return (
    <ProjectWrapper color={color} reverse={reverse}>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{details}</p>
      </div>
      <Img fixed={image} />
    </ProjectWrapper>
  )
}

export default Project
