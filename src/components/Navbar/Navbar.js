import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from "./Navbar.elements";
import { IconContext } from "react-icons";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>Sign Up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Sign Up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
