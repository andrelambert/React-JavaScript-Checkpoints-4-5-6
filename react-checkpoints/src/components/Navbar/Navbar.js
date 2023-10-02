import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  max-width: 1200px;
  background: #452c15;
  border-radius: 15px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  z-index: 999;
`
const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 0px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
`
const NavbarLogo = styled(Link)`
  color: #f2d7b1;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavbarIcon = styled(AiOutlineCoffee)`
  color: #f2d7b1;
  margin-left: 5px;
  margin-bottom: 2px;
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 2px;
    transform: translate(-100%, 60%);
    font-size: 2.0rem;
    cursor: pointer;
    }
`;

// Este é o menu mobile
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  &.active {
    transform: translateY(0);
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 85px;
    right: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    &.active {
    background: #3b2611;
    right: 0;
    opacity: 0.9;
    transition: all 0.6s ease;
    z-index: 1;
    }
  }
`;

const NavItem = styled.li`
  height: 85px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 3px solid #f2d7b1;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    &:hover {
    border-bottom: 3px solid transparent;
    }
  }
`;

const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #f2d7b1;
    transition: all 0.3s ease;
  }
  &.active {
    color: #f2d7b1;
  }

`;

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <NavbarContainer>
        <NavbarContent>

          <NavbarLogo to="/" onClick={closeMobileMenu}>
            Coffee Corner
            <NavbarIcon />
          </NavbarLogo>

          <MenuIcon onClick={handleClick}>
            {click ? <FaTimes color="#f2d7b1" /> : <FaBars color="#f2d7b1" />}
          </MenuIcon>

          <NavMenu className={click ? "nav-menu active" : "nav-menu"}>

            <NavItem>
              <NavLinks
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/sobre"
                onClick={closeMobileMenu}
              >
                Sobre
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/contato"
                onClick={closeMobileMenu}
              >
                Contato
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/blog"
                onClick={closeMobileMenu}
              >
                Blog
              </NavLinks>
            </NavItem>


            <NavItem>
              <NavLinks
                to="/faq"
                onClick={closeMobileMenu}
              >
                FAQ
              </NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContent>
      </NavbarContainer>
    </>
  );
}

export default Navbar;