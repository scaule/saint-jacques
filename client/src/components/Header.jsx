import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { pages } = props;

  const menu = Object.keys(pages).map((key, index) => (
    <li key={index}>
      <NavLink
        exact={true}
        to={`${process.env.PUBLIC_URL}${pages[key].path}`}
        activeClassName="active"
      >
        {pages[key].label}
      </NavLink>
    </li>
  ));

  return (
    <header className="header">
      <span className="header__brand">Saint Jacques</span>
      <nav>
        <ul className="header__menu">{menu}</ul>
      </nav>
    </header>
  );
};

export default Header;
