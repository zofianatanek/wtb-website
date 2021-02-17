import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Map from "./Map"

const AboutSection = styled.section`
  padding: 40px 40px;
  box-sizing: border-box;
  margin: 60px 0px;
  background-color: ${({ theme }) => theme.colors.background.dark};
  text-align: center;
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
    justify-content: space-around;
  }
`

const AboutText = styled.section`
  height: 100%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.xl} {
    width: 50vw;
  }
  article:first-of-type {
    line-height: 1.5;
  }
  article.quote {
    margin: 60px 0 0 0;
    p:first-of-type {
      font-style: italic;
    }
    p:nth-of-type(2) {
      text-align: right;
    }
  }

  .offer {
    color: ${({ theme }) => theme.colors.text.title};
  }
`

const About = () => (
  <>
    <AboutSection>
      <AboutText>
        <article>
          <p>
            Działalność firmy skoncentrowana jest wokół szeroko pojętego
            budownictwa teletechnicznego. Na swoim koncie mamy realizację
            projektów dla czołowych firm sektora telekomunikacyjnego takich jak
            operatorzy Orange Polska S.A. oraz Netia S.A. jak również
            przedstawicieli sektora publicznego między innymi Tauron Obsługa
            Klienta Sp. z o.o. oraz PKP PLK S.A. .{" "}
          </p>
          <p>
            Zaprojektowaliśmy blisko 10 tys kilometrów linii światłowodowych na
            terenie 11 województw. Braliśmy udział między innymi w takich
            projektach jak GSMR realizowany dla Polskich Kolei Państwowych oraz
            Program Operacyjny Polska Cyfrowa.{" "}
          </p>
          <p>
            Wspieramy klienta na każdym etapie projektu zapewniając kompleksową
            realizację rozpoczynającą się na obsłudze geodezyjnej poprzez
            wykonanie projektu budowlano-wykonawczego kończąc na uzgodnieniu
            Projektu Organizacji Ruchu i przekazaniu kompletnej dokumentacji
            pozwalającej przystąpić do budowy.
          </p>
          <p>
            Szczegółowe informacje znajdą Państwo w dziale{" "}
            <Link className="offer" to="/offer">
              Oferta
            </Link>{" "}
            .
          </p>
        </article>
        <article className="quote">
          <p>
            Spółka nieograniczonych możliwości. Tak w skrócie mógłbym określić
            poczucie jakie daje mi współpraca z ludźmi tworzącymi WTB Telecom.
          </p>
          <p>
            Łukasz Wojtczak <br></br>Prezes Zarządu
          </p>
        </article>
      </AboutText>
      <Map />
    </AboutSection>
  </>
)

export default About
