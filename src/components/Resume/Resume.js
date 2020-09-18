import React from "react"
import styled from "styled-components"
import Map from "./Map"

const ResumeSection = styled.section`
  padding: 40px 40px;
  box-sizing: border-box;
  margin: 60px 0px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  width: 100vw;
`
const ResumeWrapper = styled.section`
  @media ${({ theme }) => theme.device.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.xl} {
    padding-left: 40px;
    padding-right: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const ResumeText = styled.section`
  margin-top: 40px;
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.xl} {
    width: 50vw;
  }
`

const Resume = () => (
  <>
    <ResumeSection>
      <h1>Resume</h1>
      <ResumeWrapper>
        <ResumeText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim
            ut sem viverra. Ut tortor pretium viverra suspendisse potenti
            nullam. A scelerisque purus semper eget duis. Fermentum dui faucibus
            in ornare. Massa placerat duis ultricies lacus sed turpis tincidunt.
            Pretium quam vulputate dignissim suspendisse in est ante. Egestas
            egestas fringilla phasellus faucibus scelerisque eleifend.
          </p>
          <p>
            Ullamcorper sit amet risus nullam eget felis eget nunc lobortis.
            Semper quis lectus nulla at volutpat diam ut. Molestie nunc non
            blandit massa. Faucibus turpis in eu mi bibendum neque egestas
            congue. Vitae proin sagittis nisl rhoncus mattis. Egestas congue
            quisque egestas diam in arcu cursus euismod. Vulputate sapien nec
            sagittis aliquam. Scelerisque felis imperdiet proin fermentum leo.
            Nisl rhoncus mattis rhoncus urna neque viverra. Facilisis magna
            etiam tempor orci eu lobortis. Nulla aliquet enim tortor at auctor
            urna nunc id cursus.
          </p>
        </ResumeText>
        <Map />
      </ResumeWrapper>
    </ResumeSection>
  </>
)

export default Resume
