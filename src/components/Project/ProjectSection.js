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
  @media ${({ theme }) => theme.device.xxs} {
    flex-direction: column;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.md} {
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
  display: flex;
  width: 100vw;
  background-color: ${props =>
    props.color === "gold"
      ? ({ theme }) => theme.colors.background.gold
      : ({ theme }) => theme.colors.background.dark};

  justify-content: space-between;

  .description {
    align-self: center;

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
    @media ${({ theme }) => theme.device.xxs} {
      max-width: 100%;
      margin: 80px 40px;
    }
    @media ${({ theme }) => theme.device.md} {
      max-width: 60%;
      margin: 80px 40px;
    }
  }
`

const List = styled.ul`
  margin: 0 20px;
  li {
    margin: 8px;
  }
`

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`

/* ${({ theme }) => theme.colors.background.gold}; */
const Project = ({
  color,
  title,
  description,
  image,
  reverse,
  details,
  subtitle,
  list,
}) => {
  // const data = useStaticQuery(query)
  const displayList = () => {
    if (list !== undefined) {
      return (
        <List>
          <li>{list[0]}</li>
          <li>{list[1]}</li>
          <li>{list[2]}</li>
        </List>
      )
    }
  }
  const displaySubtitle = () => {
    if (subtitle !== undefined) {
      return <p>{subtitle}</p>
    }
  }

  return (
    <ProjectWrapper color={color} reverse={reverse}>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{details}</p>
        {displaySubtitle()}
        {displayList()}
      </div>
      <ImageWrapper>
        <Img fluid={image} />
      </ImageWrapper>
    </ProjectWrapper>
  )
}

export default Project
