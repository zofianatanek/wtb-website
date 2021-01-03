import React, { useEffect } from "react"
import styled from "styled-components"
import ContactMap from "../components/ContactMap/ContactMap"

const Contact = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 252px);
  justify-content: center;
  h1 {
    padding: 0 40px;
  }
`
const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.dark};
  display: flex;
`
const ContactInfo = styled.article`
  padding: 5% 10%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    list-style: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.title};
  }
`

const ContactPage = () => {
  return (
    <Contact>
      <h1>Kontakt</h1>
      <ContactSection>
        <ContactInfo>
          <h2>WTB Telecom Sp. z o.o. Sp. k.</h2>
          <h3>Pl. Orląt Lwowskich 20e 53-605 Wrocław </h3>
          <ul>
            <li>Tel.: 792 719 623</li>
            <li>E-mail: biuro@wwtb.pl</li>
            <li>Linkedin</li>
          </ul>
          <h4>
            NIP: 368856753 REGON: 368856753 Spółka zarejestrowana w Sądzie
            Rejonowym DLA WROCŁAWIA FABRYCZNEJ WE WROCŁAWIU, VI WYDZIAŁ
            GOSPODARCZY KRAJOWEGO REJESTRU SĄDOWEGO pod numerem 0000706536
          </h4>
        </ContactInfo>
        <ContactMap />
      </ContactSection>
    </Contact>
  )
}

export default ContactPage
