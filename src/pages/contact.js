import React from "react"
import styled from "styled-components"
import { LinkedinOutlined } from "@ant-design/icons"
import ContactMap from "../components/ContactMap/ContactMap"

const Contact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fonts.regular};
  h1 {
    padding: 0 40px;
  }
  h3 {
    font-weight: ${({ theme }) => theme.fonts.regular};
  }
  @media ${({ theme }) => theme.device.sm} {
    min-height: calc(100vh - 252px);
  }
`
const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.dark};
  display: flex;
  justify-content: space-evenly;
  @media ${({ theme }) => theme.device.xxs} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
  }
`
const ContactInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.title};
  }
  @media ${({ theme }) => theme.device.xxs} {
    margin: 0 25px;
  }
  @media ${({ theme }) => theme.device.sm} {
    padding: 5% 0;
    margin: 0 40px;
  }
`
const MapWrapper = styled.article`
  @media ${({ theme }) => theme.device.xxs} {
    display: flex;
    justify-content: center;
    text-justify: center;
    z-index: 0;
    width: 100%;
    height: 500px;
  }
  @media ${({ theme }) => theme.device.md} {
    max-width: 700px;
    height: 500px;
  }
`

const ContactPage = () => {
  return (
    <Contact>
      <h1>Kontakt</h1>
      <ContactSection>
        <ContactInfo>
          <h2>WTB Telecom Sp. z o.o. Sp. k.</h2>
          <h3>
            Pl. Orląt Lwowskich 20e <br></br> 53-605 Wrocław{" "}
          </h3>
          <ul>
            <li>Tel.: 792 719 623</li>
            <li>E-mail: biuro@wwtb.pl</li>
            <li>
              <a
                href="https://www.linkedin.com/company/worldwide-telecom-business/about/"
                target="blank"
              >
                {" "}
                <LinkedinOutlined /> Linkedin
              </a>
            </li>
          </ul>
          <p>
            NIP: 368856753 REGON: 368856753 <br></br>Spółka zarejestrowana w
            Sądzie Rejonowym dla Wrocławia Fabrycznej we Wrocławiu <br></br>VI
            Wydział Gospodarczy Krajowego Rejestry Sądowego pod numerem
            0000706536
          </p>
        </ContactInfo>
        <MapWrapper>
          <ContactMap />
        </MapWrapper>
      </ContactSection>
    </Contact>
  )
}

export default ContactPage
