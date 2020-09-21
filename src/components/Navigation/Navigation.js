import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../SVGs/LogoSVG"

const MenuIcon = styled.button`
  @media ${({ theme }) => theme.device.xs} {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    div {
      width: 1.5rem;
      height: 0.2rem;
      background: black;
      border-radius: 5px;
      transform-origin: 1px;
    }
  }
  @media ${({ theme }) => theme.device.md} {
    display: none;
  }
`

const NavigationWrapper = styled.nav`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background.primary};
  width: 100%;
  z-index: 2;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.text.title};
    }
  }

  @media ${({ theme }) => theme.device.xs} {
    height: 72px;
    display: flex;
    align-items: center;
    svg {
      height: 40px;
    }
  }
  @media ${({ theme }) => theme.device.md} {
    top: 0px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 72px;
    font-family: "Montserrat";
  }
`
const NavigationOverlay = styled.div`
  @media ${({ theme }) => theme.device.xs} {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.85);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.md} {
    display: none;
  }
`
const NavigationList = styled.ul`
  list-style: none;

  @media ${({ theme }) => theme.device.xs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.md} {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
`
const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`
const OverlayNavigationList = styled.ul`
  @media ${({ theme }) => theme.device.xs} {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      padding: 36px;
    }
  }
`

const Navigation = () => (
  <NavigationWrapper>
    <LogoSVG width="232px" maxHeight="72px" />
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

    <NavigationOverlay>
      <OverlayNavigationList>
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
      </OverlayNavigationList>
    </NavigationOverlay>
    <MenuIcon>
      <div></div>
      <div></div>
      <div></div>
    </MenuIcon>
  </NavigationWrapper>
)

export default Navigation
