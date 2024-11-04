import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import booksMain1 from "../../assets/books_main1.jpg";
import userProfile from "../../assets/user_profile.svg";
import humburgerMenu from "../../assets/menu_hamburger.svg";
import bookMark from "../../assets/bookmark.svg";
import "./welcome.scss";
const WelcomePage = ({onSearch}:any) => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchResult(e.target.value);
    onSearch(searchResult);
  };
  const handleNavigate = () =>{
    navigate("/search");
  };
  return (
    <React.Fragment>
      <section className="welcome-page_section">
        <div className="section__main-container">
          <img
            className="main-container__img"
            src={booksMain1}
            alt="Books"
            width={720}
          />
          <div className="main-container__search-container">
            <div className="search-container__title">
              <h1 className="title1">Book</h1>
              <h1 className="title2">Pocket</h1>
            </div>
            <div className="search">
              <input
                className="search-container__input"
                placeholder="Найти книгу"
                value={searchResult}
                onChange={handleInputChange}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleNavigate();
                    }
                  }}          
              ></input>
              <button className="search-container__btn" onClick={handleNavigate}>Все</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default WelcomePage;
