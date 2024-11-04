import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/welcome/welcome.page";
import "./pages/search/search.page";

import Testpage from "./components/test.page";
import WelcomePage from "./pages/welcome/welcome.page";
import SearchPage from "./pages/search/search.page";
function App() {
  const [inputSearch, setInputSearch] = useState('');
  const getSearchInputValue = (inputValue:string)=>{
    setInputSearch(inputValue);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage onSearch={getSearchInputValue} />} />
        <Route path="/collection" element={<Testpage />} />
        <Route path="/search" element={<SearchPage inputSearch={inputSearch} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
