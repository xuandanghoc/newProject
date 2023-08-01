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
import Home from "../home/Home";
import { useState } from "react";

function Header() {
  const navHome = () => {};
  return (
    <>
      <Container>
        <Nav
          activeKey="1"
          className="header-container justify-content-between align-items-center"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              href="#/home"
              className="nav-logo d-flex align-items-center p-0"
            >
              <Logo className="p-0" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-mid">
            <Nav.Link eventKey="2" title="Item"  onClick={() => {
              window.location.href = 'Home.js'
            }}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" title="Item" href="Shop.js" onClick={() => {
              window.location.href = 'Shop.js'
            }}>
              Shop
            </Nav.Link>
            <Nav.Link eventKey="2" title="Item">
              About
            </Nav.Link>
            <Nav.Link eventKey="2" title="Item">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-icon d-flex align-items-center">
            <Nav.Link eventKey="2" title="Item">
              <img src={contactLogo} alt="contact" />
            </Nav.Link>
            <Nav.Link eventKey="2" title="Item">
              <img src={searchLogo} alt="search" />
            </Nav.Link>
            <Nav.Link eventKey="2" title="Item">
              <img src={heartLogo} alt="heart" />
            </Nav.Link>
            <Nav.Link eventKey="2" title="Item">
              <img src={cartLogo} alt="cart" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}
export default Header;
