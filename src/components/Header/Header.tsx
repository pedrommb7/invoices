import React from "react";
import { moonSVG } from "images";
import Button from "components/Button/Button";
import "../../styles/trumps/_hide.scss";
import "../../styles/trumps/_margins.scss";
import "./_header.scss";

const darkMode = () => {};

const Header = () => {
  return (
    <header id="header">
      <nav className="nav-header">
        <button type="button" className="hamburguer mg--26 hide--lg">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Button mgAmount="26" type="button" icon={moonSVG} onClick={darkMode} />
      </nav>
    </header>
  );
};

export default Header;
