import React from "react";
import ListNav from "./ListNav";
const listNav1 = ["Home", "Shop", "About", "Contact"];
const listNav2 = ["Payment Options", "Returns", "Privacy Policies"];

function FooterTop() {
  return (
    <div className="footer-top d-flex">
      <div className="footer-top-title">
        <p className="fs-4 fw-bold">Funiro.</p>
        <p className="fs-6 fw-normal mt-5">
          400 University Drive Suite 200 Coral Gables,<br></br> FL 33134 USA
        </p>
      </div>
      <div className="footer-top-navigation d-fex justify-content-between">
        <div className="footer-top-navigation-col">
          <span className="fs-6 fw-normal">Links</span>
          <ul className="footer-top-navigation-col-list">
            {listNav1.map((item, index) => {
              return <ListNav key={item} nav={item} />;
            })}
          </ul>
        </div>
        <div className="footer-top-navigation-col">
          <span className="fs-6 fw-normal">Help</span>
          <ul className="footer-top-navigation-col-list">
            {listNav2.map((item, index) => {
              return <ListNav key={item} nav={item} />;
            })}
          </ul>
        </div>
        <div className="footer-top-navigation-col">
          <span className="fs-6 fw-normal">Newsletter</span>
          <div className="footer-top-navigation-email">
            <input type="text" placeholder="Enter Your Email Address" className="fw-normal" />
            <button className="fw-normal">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
