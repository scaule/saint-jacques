import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { pages } = props;

  const menu = Object.keys(pages).map((key, index) => (
    <li key={index}>
      <Link to={`${process.env.PUBLIC_URL}${pages[key].path}`}>
        {pages[key].label}
      </Link>
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
