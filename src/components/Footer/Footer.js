import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../SVGs/LogoSVG"

const FooterWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  /* max-height: 200px; */
  @media ${({ theme }) => theme.device.xxs} {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.dark};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.75fr 0.25fr;
    grid-row-gap: 12px;
    padding: 12px;
  }
  @media ${({ theme }) => theme.device.lg} {
    display: flex;
    background-color: ${({ theme }) => theme.colors.background.dark};
    justify-content: space-evenly;
    /* align-items: center; */
    width: 100%;
    padding: 32px 16px;
  }
  @media ${({ theme }) => theme.device.xl} {
    padding: 32px;
  }
`
const Logo = styled(LogoSVG)`
  @media ${({ theme }) => theme.device.xxs} {
    width: 180px;
  }
  @media ${({ theme }) => theme.device.sm} {
    width: 200px;
  }
  @media ${({ theme }) => theme.device.lg} {
    width: 200px;
  }
  @media ${({ theme }) => theme.device.xl} {
    width: 250px;
  }
  height: auto;
  align-self: center;
  justify-self: center;
`

const AdressWrapper = styled.div`
  margin: 0 8px;
  h3 {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  @media ${({ theme }) => theme.device.xxs} {
    justify-self: flex-start;
    h2 {
      font-size: 14px;
    }
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
  @media ${({ theme }) => theme.device.lg} {
    justify-self: center;
    h2 {
      font-size: 12px;
    }
    h4 {
      font-size: 10px;
    }
    p {
      font-size: 10px;
    }
  }
  @media ${({ theme }) => theme.device.xxl} {
    h2 {
      font-size: 21px;
    }
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fonts.bold};
    }
    p {
      font-size: 12px;
    }
  }
`

const FullContactWrapper = styled.div`
  ul {
    list-style-type: none;
    li {
      :first-child {
        height: 33px;
        color: ${({ theme }) => theme.colors.text.title};
        font-weight: ${({ theme }) => theme.fonts.bold};
      }
    }
  }
  @media ${({ theme }) => theme.device.xxs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.lg} {
    display: block;
    margin: 0 8px;
    ul {
      li {
        :first-child {
          font-size: 12px;
          margin-bottom: 10.5px;
        }
        &.contact {
          font-size: 10px;
          :last-of-type {
            margin-top: 12px;
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.xxl} {
    ul {
      li {
        :first-child {
          font-size: 18px;
          margin-bottom: 10.5px;
        }
        &.contact {
          font-size: 14px;
        }
      }
    }
  }
`
const ShortContactWrapper = styled.div`
  @media ${({ theme }) => theme.device.xxs} {
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
    align-self: auto;
  }
`

const WebsiteMapWrapper = styled.div`
  margin: 0 8px;
  justify-self: center;

  .offer {
    color: ${({ theme }) => theme.colors.text.title};
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  ul {
    list-style-type: none;
    li {
      a {
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
  @media ${({ theme }) => theme.device.xxs} {
    align-self: center;
    justify-self: flex-start;
    .offer {
      font-size: 12px;
      font-weight: normal;
    }
    .navigation {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      font-size: 10px;
      li {
        text-align: left;
        padding: 0 25px 0 0;
      }
    }
  }
  @media ${({ theme }) => theme.device.lg} {
    align-self: flex-start;
    .offer {
      font-size: 12px;
      font-weight: bold;
    }
    li {
      font-size: 10px;
      :first-of-type {
        height: 33px;
        margin-bottom: 10.5px;
      }
    }
    .navigation {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
  @media ${({ theme }) => theme.device.xxl} {
    align-self: auto;
    .offer {
      font-size: 18px;
    }
    .navigation {
      display: flex;
      li {
        font-size: 12px;
      }
    }
  }
`

const PrivacyPolicy = styled.div`
  @media ${({ theme }) => theme.device.xxs} {
    grid-column-start: 1;
    grid-column-end: span 2;
    text-align: right;
    align-self: center;
    font-size: 8px;
  }
  @media ${({ theme }) => theme.device.lg} {
    span {
      color: black;
    }
    align-self: flex-end;
    font-size: 8px;
  }
  @media ${({ theme }) => theme.device.xxl} {
    align-self: flex-end;
    font-size: 12px;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
      <AdressWrapper>
        <h2>WTB Telecom Sp. z o.o. Sp. k</h2>
        <h4>Adres korespondencyjny:</h4>
        <p>
          Pl. Orląt Lwowskich 20e <br></br>53-605 Wrocław{" "}
        </p>
      </AdressWrapper>
      {/* <CompanyDataWrapper>
        <ul>
          <li>NIP: 368856753</li>
          <li>REGON: 8943119983</li>
          <li>KRS: 0000706536</li>
        </ul>
      </CompanyDataWrapper> */}
      <FullContactWrapper>
        <ul>
          <li>Skontaktuj się z nami</li>
          <li className="contact">Tel: 792 719 623</li>
          <li className="contact">E-mail: biuro@wwtb.pl</li>
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
            <Link className="offer" to="/offer">
              Sprawdź ofertę
            </Link>
          </li>
        </ul>
        <ul className="navigation">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/projects">Projekty</Link>
          </li>
          <li>
            <Link to="/offer">Oferta</Link>
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
