import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Outlet
} from "react-router-dom";
import "./App.css";
import "./pages/welcome/welcome.page";
import "./pages/search/search.page";

import Testpage from "./components/test.page";
import WelcomePage from "./pages/welcome/welcome.page";
import SearchPage from "./pages/search/search.page";
import MenuNavigation from "./components/navigation/menu.component";
import BookInfo from "./pages/book-info/book-info.page";

const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [bookId, setBookId] = useState("");

  const getSearchInputValue = (inputValue: string) => {
    setInputSearch(inputValue);
  };

  const getBookId = (bookId: string) => {
    setBookId(bookId);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WelcomePage onSearch={getSearchInputValue} />}
        />
        <Route path="/" element={<Layout />}>
          <Route path="collection" element={<Testpage />} />
          <Route path="search" element={<SearchPage inputSearch={inputSearch} onOpenBook={getBookId} />} /> 
          <Route path="book" element={<BookInfo bookId={bookId} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <MenuNavigation />}
      <Outlet />
    </>
  );
};

export default App;
