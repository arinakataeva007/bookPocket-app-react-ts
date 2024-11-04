import React from "react";
import { Link } from "react-router-dom";
import booksMain1 from "../../assets/books_main1.jpg";
import userProfile from "../../assets/user_profile.svg";
import humburgerMenu from "../../assets/menu_hamburger.svg";
import bookMark from "../../assets/bookmark.svg";

import "./welcome.css";
const WelcomePage = () => {
  return (
    <React.Fragment>
      <section className="welcome-page_section">
        <div className="section__main-container">
          <img className="main-container__img" src={booksMain1} alt="Books" width={720} />
          <div className="main-container__search-container">
            <div className="search-container__title">
              <h1 className="title1">Book</h1>
              <h1 className="title2">Pocket</h1>
            </div>
            <input className="search-container__input" placeholder="Search..." ></input>
          </div>
          {/* <div className="main-container__menu-container">
            <div className="menu-container__icon-container">
                <img className="icon-container__user" src={userProfile} alt="User" />
                <img className="icon-container__menu" src={humburgerMenu} alt="Menu" />
            </div>
            <img className="menu-container__bookmark" src={bookMark} alt="bookmark"></img>
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};
export default WelcomePage;
