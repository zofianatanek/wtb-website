import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../SVGs/LogoSVG"

const FooterWrapper = styled.div`
  max-height: 200px;
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.dark};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.75fr 0.5fr;
    padding: 12px;
  }
  @media ${({ theme }) => theme.device.lg} {
    display: flex;
    background-color: ${({ theme }) => theme.colors.background.dark};
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    padding: 32px;
  }
`
const Logo = styled(LogoSVG)`
  @media ${({ theme }) => theme.device.xs} {
    width: 150px;
  }
  @media ${({ theme }) => theme.device.sm} {
    width: 200px;
  }
  @media ${({ theme }) => theme.device.md} {
    width: 250px;
  }
  height: auto;
  justify-self: center;
`

const AdressWrapper = styled.div`
  align-self: center;
  justify-self: center;
  h3 {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  h4 {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  p {
    margin: 0;
  }
  @media ${({ theme }) => theme.device.lg} {
    h3 {
      font-size: 14px;
    }
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
  @media ${({ theme }) => theme.device.xxl} {
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`
const CompanyDataWrapper = styled.div`
  @media ${({ theme }) => theme.device.xs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.lg} {
    color: #adadad;
    position: relative;
    right: 50px;
    font-size: 12px;
    ul {
      list-style-type: none;
    }
  }
`
const FullContactWrapper = styled.div`
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
  @media ${({ theme }) => theme.device.xs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.lg} {
    display: block;
  }
`
const ShortContactWrapper = styled.div`
  @media ${({ theme }) => theme.device.xs} {
    display: block;
    color: ${({ theme }) => theme.colors.text.title};
    font-size: 18px;
    align-self: center;
    justify-self: center;
    ul {
      list-style-type: none;
    }
  }
  @media ${({ theme }) => theme.device.lg} {
    display: none;
  }
`

const WebsiteMapWrapper = styled.div`
  @media ${({ theme }) => theme.device.xs} {
    ul {
      display: flex;
      .offer {
        display: none;
      }
      li {
        padding: 8px;
      }
    }
  }
  align-self: center;
  justify-self: center;
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
  @media ${({ theme }) => theme.device.xs} {
    grid-column-start: 1;
    grid-column-end: span 2;
    text-align: right;
    align-self: center;
  }
  font-size: 12px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
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
      <FullContactWrapper>
        <ul>
          <li>Skontaktuj się z nami</li>
          <li className="header">Tel:</li>
          <li>792 719 623</li>
          <li className="header">E-mail:</li>
          <li>biuro@wwtb.pl</li>
        </ul>
      </FullContactWrapper>
      <ShortContactWrapper>
        <ul>
          <li>+48 792 719 623</li>
          <li>biuro@wwtb.pl</li>
        </ul>
      </ShortContactWrapper>
      <WebsiteMapWrapper>
        <ul>
          <li>
            <Link class="offer" to="/offer">
              Sprawdź oferte
            </Link>
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

export default Footer
