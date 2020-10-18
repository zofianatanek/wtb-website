import React from "react"
import styled from "styled-components"
import GoogleMap from "../components/GoogleMap/GoogleMap"

const Contact = styled.section`
  width: 100vw;
`
const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.dark};
  display: flex;
`
const ContactInfo = styled.div`
  width: 60%;
`

const ContactPage = () => (
  <Contact>
    <h1>Kontakt</h1>
    <ContactSection>
      <ContactInfo>
        <h2>WTB Telecom Sp. z o.o. Sp. k.</h2>
        <h3>Pl. Orląt Lwowskich 20e 53-605 Wrocław </h3>
        <h2>Tel.: 792 719 623 E-mail: biuro@wwtb.pl Linkedin</h2>
        <h4>
          NIP: 368856753 REGON: 368856753 Spółka zarejestrowana w Sądzie
          Rejonowym DLA WROCŁAWIA FABRYCZNEJ WE WROCŁAWIU, VI WYDZIAŁ
          GOSPODARCZY KRAJOWEGO REJESTRU SĄDOWEGO pod numerem 0000706536
        </h4>
      </ContactInfo>
      <GoogleMap></GoogleMap>
    </ContactSection>
  </Contact>
)

export default ContactPage
