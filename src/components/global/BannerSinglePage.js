import React from "react";
import ImageBanner from '../../assets/ShopPage/BannerShop.png';
function BannerSinglePage(props) {
  const { pageName } = props;
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${ImageBanner})`,
      }}
    >
      <span className="">{pageName}</span>
      <div className="">
        <span>Home</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
        </svg>
        <span>{pageName}</span>
      </div>
    </div>
  );
}

export default BannerSinglePage;
