import React from "react"
import styled from "styled-components"
import LogoSVG from "../LogoSVG"

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
const AdressWrapper = styled.div`
  display: block;
`
const CompanyDataWrapper = styled.div`
  color: gray;
  ul {
    list-style-type: none;
  }
`
const ContactWrapper = styled.div`
  ul {
    list-style-type: none;
  }
`

const DefaultFooter = () => {
  return (
    <FooterWrapper>
      <LogoSVG style={{ width: "182px" }} />
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
        <h1>Skontaktuj sie z nami</h1>
        <ul>
          <li>Tel:</li>
          <li>792 719 623</li>
          <li>E-mail:</li>
          <li>biuro@wwtb.pl</li>
        </ul>
      </ContactWrapper>
    </FooterWrapper>
  )
}

export default DefaultFooter
