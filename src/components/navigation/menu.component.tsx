import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

const MenuNavigation = () => {
  return (
    <React.Fragment>
      <section className="navigation-container">
        <Link className="menu-link" to="/collection">Моя коллекция</Link>
        <Link className="menu-link" to="/">Главная</Link>
        <Link className="menu-link" to="/search">Все книги</Link>
      </section>
    </React.Fragment>
  );
};
export default MenuNavigation;
