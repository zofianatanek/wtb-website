import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../SVGs/LogoSVG"

const MenuIcon = styled.button`
  @media ${({ theme }) => theme.device.xxs} {
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
    outline: none;
    border: none;
    div {
      width: 1.5rem;
      height: 0.2rem;
      background: black;
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;
      transition: opacity 300ms, transform 300ms;
      :first-child {
        transform: ${({ nav }) => (nav ? "transform(45deg)" : "transform(0)")};
      }
      :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
  @media ${({ theme }) => theme.device.md} {
    display: none;
  }
`

const NavigationWrapper = styled.nav`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.background.primary};
  /* width: 100vh; */
  z-index: 2;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.text.title};
      transition: color 300ms;
    }
  }

  @media ${({ theme }) => theme.device.xxs} {
    top: 0px;
    position: sticky;
    z-index: 2;
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
  }
`
const NavigationOverlay = styled.div`
  @media ${({ theme }) => theme.device.xxs} {
    position: absolute;
    top: 0;
    transform: ${({ nav }) => (nav ? "translateY(0)" : "translateY(-100%)")};
    background-color: rgba(255, 255, 255, 0.85);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-content: center;
    justify-content: center;
    transition: transform 400ms;
  }
  @media ${({ theme }) => theme.device.md} {
    display: none;
  }
`
const NavigationList = styled.ul`
  list-style: none;

  @media ${({ theme }) => theme.device.xxs} {
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
  @media ${({ theme }) => theme.device.xxs} {
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

const Navigation = () => {
  const [nav, showNav] = useState(false)
  return (
    <NavigationWrapper>
      <Link to="/">
        <LogoSVG width="300px" />
      </Link>
      <NavigationList>
        <NavigationListItem>
          <Link to="/">Strona główna</Link>
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

      <NavigationOverlay nav={nav}>
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
      <MenuIcon onClick={() => showNav(!nav)}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
    </NavigationWrapper>
  )
}

export default Navigation
