import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const menu = props.pages.map((page, index) => (
    <li key={index}>
      <Link to={page.path}>{page.label}</Link>
    </li>
  ));

  return (
    <header className="header">
      <span className="header__brand">Saint Jacques</span>
      <nav>
        <ul>{menu}</ul>
      </nav>
    </header>
  );
};

export default Header;
