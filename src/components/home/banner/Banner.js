
import React from "react";
import bgImage from "../../../assets/decal-bg.png";
import Rectangle from "./Rectangle";

function Banner() {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Rectangle />
    </div>
  );
}

export default Banner;
