import React from "react"
import styled from "styled-components"
import Map from "./Map"

const AboutSection = styled.section`
  padding: 40px 40px;
  box-sizing: border-box;
  margin: 60px 0px;
  background-color: ${({ theme }) => theme.colors.background.dark};
`
const AboutWrapper = styled.section`
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
const AboutText = styled.section`
  text-align: justify;
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.xl} {
    width: 50vw;
  }
`

const About = () => (
  <>
    <AboutSection>
      <h1>O firmie</h1>
      <AboutWrapper>
        <AboutText>
          <p>
            WTB Telecom Sp. z o.o. powstała w odpowiedzi na coraz większe
            zapotrzebowanie rynku na wysokiej klasy usługi inżynieryjne.
          </p>
          <p>
            Początkowo profil spółki skupiał się wyłącznie na projektach sieci
            światłowodowych by finalnie rozszerzyć zakres działania Wykonujemy
            projekty dla głównych Operatorów telekomunikacyjnych w kraju m.in.
            Orange Polska S.A. czy Netia S.A. Wspieramy kontrahentów przy
            największych projektach teletechnicznych o zasięgu ogólnokrajowym
            m.in.:
          </p>
          <p>
            <ul style={{ marginLeft: "40px" }}>
              <li>Program Operacyjny Polska Cyfrowa</li>
              <li>
                {" "}
                Budowa infrastruktury systemu ERTMS/GSM-R na liniach kolejowych
                PKP Polskie Linie Kolejowe S.A.
              </li>
            </ul>
          </p>
          <p>
            W miarę upływu czasu rozszerzyliśmy działalność spółki o dział
            Inżynierii Ruchu Drogowego, w ramach którego Wykonujemy Projekty
            Organizacji Ruchu Drogowego zapewniając
          </p>
        </AboutText>
        <Map />
      </AboutWrapper>
    </AboutSection>
  </>
)

export default About
