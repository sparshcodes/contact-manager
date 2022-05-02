import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src="../images/cmLogo.png" alt="contact manager logo" />
      </Link>
    </header>
  );
}

export default Header;
