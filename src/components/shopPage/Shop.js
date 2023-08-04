import BannerSinglePage from "../global/BannerSinglePage";
import Toolbar from "./Toolbar";
import { useState } from "react";
import { TitleContext, TitleProvider } from "../../context/UseContext";
import { useContext } from "react";

function Shop(props) {
    const {title} = props;
  return (
    <div className="shop">
      <BannerSinglePage pageName={title} />
      <Toolbar />
    </div>
  );
}

export default Shop;
