import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const PartnersSection = styled.section`
  text-align: center;
  padding: 40px;
  h1 {
    text-align: left;
  }
`
const ListWrapper = styled.div`
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`
const ImageList = styled.ul`
  @media ${({ theme }) => theme.device.xxs} {
    animation: move 20s linear infinite;
  }
  @media ${({ theme }) => theme.device.md} {
    animation: move 40s linear infinite;
  }
  @media ${({ theme }) => theme.device.xl} {
    animation: move 40s linear infinite;
  }
  display: flex;
  li {
    display: flex;
    margin: 0 60px;
    align-items: center;
  }
  @keyframes move {
    0% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`

const query = graphql`
  {
    orange: file(name: { eq: "orange" }) {
      childImageSharp {
        fixed(width: 64, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tauron: file(name: { eq: "tauron" }) {
      childImageSharp {
        fixed(width: 64, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    netia: file(name: { eq: "netia" }) {
      childImageSharp {
        fixed(width: 216, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mx3: file(name: { eq: "mx3" }) {
      childImageSharp {
        fixed(width: 159, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ecs: file(name: { eq: "ecs" }) {
      childImageSharp {
        fixed(width: 253, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nexotech: file(name: { eq: "nexotech" }) {
      childImageSharp {
        fixed(width: 191, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    teltech: file(name: { eq: "teltech" }) {
      childImageSharp {
        fixed(width: 219, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    syscom: file(name: { eq: "syscom" }) {
      childImageSharp {
        fixed(width: 240, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    maxinvest: file(name: { eq: "maxinvest" }) {
      childImageSharp {
        fixed(width: 166, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    impel: file(name: { eq: "impel" }) {
      childImageSharp {
        fixed(width: 159, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    axians: file(name: { eq: "axians" }) {
      childImageSharp {
        fixed(width: 159, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Partners = () => {
  const data = useStaticQuery(query)
  return (
    <PartnersSection>
      <h1>Partnerzy</h1>
      <ListWrapper>
        <ImageList>
          <li>
            {" "}
            <Img fixed={data.orange.childImageSharp.fixed} />
          </li>
          <li>
            <Img fixed={data.tauron.childImageSharp.fixed} />
          </li>
          <li>
            <Img fixed={data.netia.childImageSharp.fixed} />
          </li>
          <li>
            <Img fixed={data.teltech.childImageSharp.fixed} />
          </li>
          <li>
            {" "}
            <Img fixed={data.impel.childImageSharp.fixed} />
          </li>
          <li>
            {" "}
            <Img fixed={data.ecs.childImageSharp.fixed} />
          </li>
          <li>
            {" "}
            <Img fixed={data.axians.childImageSharp.fixed} />
          </li>
          <li>
            {" "}
            <Img fixed={data.mx3.childImageSharp.fixed} />
          </li>
          <li>
            <Img fixed={data.nexotech.childImageSharp.fixed} />
          </li>
          <li>
            {" "}
            <Img fixed={data.syscom.childImageSharp.fixed} />
          </li>
          <li>
            {" "}
            <Img fixed={data.maxinvest.childImageSharp.fixed} />
          </li>
        </ImageList>
      </ListWrapper>
    </PartnersSection>
  )
}

export default Partners
