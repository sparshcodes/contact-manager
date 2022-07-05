import React from "react";
import reactLogo from "../../assets/react-logo.png"
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made With <img src={reactLogo} alt="react logo" />
      </p>
    </footer>
  );
}

export default Footer;
