import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../SVGs/LogoSVG"

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`
const AdressWrapper = styled.div`
  h3 {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  h4 {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`
const CompanyDataWrapper = styled.div`
  color: #adadad;
  position: relative;
  right: 50px;
  font-size: 12px;
  ul {
    list-style-type: none;
  }
`
const ContactWrapper = styled.div`
  ul {
    list-style-type: none;
    li {
      :first-child {
        color: ${({ theme }) => theme.colors.text.title};
        font-size: 18px;
        font-weight: ${({ theme }) => theme.fonts.bold};
        margin-bottom: 8px;
      }
      color: ${({ theme }) => theme.colors.text.primary};
      &.header {
        font-size: 14px;
      }
      font-size: 12px;
    }
  }
`
const WebsiteMapWrapper = styled.div`
  ul {
    list-style-type: none;
    li {
      :first-child {
        a {
          color: ${({ theme }) => theme.colors.text.title};
          font-size: 18px;
          font-weight: ${({ theme }) => theme.fonts.bold};
        }
      }
      a {
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
`

const PrivacyPolicy = styled.div`
  font-size: 12px;
`

const DefaultFooter = () => {
  return (
    <FooterWrapper>
      <LogoSVG style={{ width: "250px", height: "100px" }} />
      <AdressWrapper>
        <h3>WTB Telecom Sp. z o.o. Sp. k</h3>
        <h4>Adres korespondencyjny:</h4>
        <p>
          Pl. Orląt Lwowskich 20e <br></br>53-605 Wrocław{" "}
        </p>
      </AdressWrapper>
      <CompanyDataWrapper>
        <ul>
          <li>NIP: 368856753</li>
          <li>REGON: 8943119983</li>
          <li>KRS: 0000706536</li>
        </ul>
      </CompanyDataWrapper>
      <ContactWrapper>
        <ul>
          <li>Skontaktuj sie z nami</li>
          <li className="header">Tel:</li>
          <li>792 719 623</li>
          <li className="header">E-mail:</li>
          <li>biuro@wwtb.pl</li>
        </ul>
      </ContactWrapper>
      <WebsiteMapWrapper>
        <ul>
          <li>
            <Link to="/offer">Sprawdz oferte</Link>
          </li>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/projects">Projekty</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </WebsiteMapWrapper>
      <PrivacyPolicy>
        <span>© WTB Telecom Sp. z o.o. Sp. k. wszelkie prawa zastrzeżone</span>
      </PrivacyPolicy>
    </FooterWrapper>
  )
}

export default DefaultFooter
