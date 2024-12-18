import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__img">
            <img src="/icons.png" alt="icons" />
          </div>
          <p>f&b ® 2024</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
