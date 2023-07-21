import React from "react";
import imageLogo from "../../assets/Logo.png";
import Scss from "../home/Header.scss";

function Logo() {
  return (
    <div className="logo d-flex align-items-center">
      <img
        src={imageLogo}
        width="50"
        height="32"
        className="d-inline-block align-top"
        alt="React bootstrap"
      />
      <span className="title blackColor">Furniro</span>
    </div>
  );
}

export default Logo;
