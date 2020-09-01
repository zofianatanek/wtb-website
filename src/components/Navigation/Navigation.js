import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../LogoSVG"

const NavigationWrapper = styled.nav`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 72px;
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #ecad1b;
    }
  }
`

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`
const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`

const Navigation = () => (
  <NavigationWrapper>
    <LogoSVG width="232px" />
    <NavigationList>
      <NavigationListItem>
        <Link to="/">Strona główna</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">O nas</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/projects">Projekty</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/offer">Oferta</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">Kontakt</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
