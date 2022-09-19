import React from "react";
import { MoonSVG } from "images";
import Button from "components/Button/Button";
import "./_header.scss";
import { FilterByProperties } from "components/FilterBy/declarations";

const darkMode = () => {};

const Header = () => {
  return (
    <header>
      <nav className="nav-header">
        <button type="button" className="hamburguer mg--26 hide--lg">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Button type="button" icon={<MoonSVG />} onClick={darkMode} />
      </nav>
    </header>
  );
};

export default Header;
