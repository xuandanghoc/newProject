import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import Container from "react-bootstrap/esm/Container";
function Footer() {
  return (
    <div className="footer">
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </div>
  );
}

export default Footer;
