import React from "react";
import Logo from "../home/Logo";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactLogo from "../../assets/contact.png";
import heartLogo from "../../assets/heart.png";
import searchLogo from "../../assets/search.png";
import cartLogo from "../../assets/shopping-cart-outlined.png";
import { useLocation, NavLink, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { TitleContext, TitleProvider } from "../../context/UseContext";

function Header(props) {
  const { handleTitleBannerClick } = props;
  useEffect(() => {
    localStorage.setItem("title", handleTitleBannerClick);
    }, []);

  return (
    <>
      <div id="header">
        <Container>
          <div className="header-container d-flex justify-content-between align-items-center">
            <Nav
              activeKey="1"
              className="header-logo justify-content-between align-items-center"
            >
              <Logo className="p-0" />
            </Nav>
            <Nav className="d-flex">
              <Nav>
                <Link
                  to="/"
                  onClick={handleTitleBannerClick}
                >
                  Home
                </Link>
              </Nav>
              <Nav to="/shop">
                <Link
                  to="/shop"
                  onClick={handleTitleBannerClick}
                >
                  Shop
                </Link>
              </Nav>
              <Nav>
                <Link to="/about">About</Link>
              </Nav>
              <Nav>
                <Link to="/contact">Contact</Link>
              </Nav>
            </Nav>

            <Nav className="nav-icon d-flex align-items-center">
              <Link title="Item">
                <img src={contactLogo} alt="contact" />
              </Link>
              <Link title="Item">
                <img src={searchLogo} alt="search" />
              </Link>
              <Link title="Item">
                <img src={heartLogo} alt="heart" />
              </Link>
              <Link title="Item">
                <img src={cartLogo} alt="cart" />
              </Link>
            </Nav>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
