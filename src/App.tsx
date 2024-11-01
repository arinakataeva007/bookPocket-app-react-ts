import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/welcome/welcome.page";
import "./pages/search/search.page";

import Testpage from "./components/test.page";
import WelcomePage from "./pages/welcome/welcome.page";
import SearchPage from "./pages/search/search.page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/collection" element={<Testpage />} />
        <Route path="/search" element={<SearchPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
