import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Archive from "./Pages/Archive";
import About from "./Pages/About";
import Cards from "./Components/Cards";
import IssueArticles from "./Components/IssueArticles";
import Issue from "./Pages/Issue";
import Article from "./Pages/Article";
import Editorial from "./Pages/Editorial";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/" element={<Cards />} />
          <Route path="/Issue/:issue_id" element={<Issue />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/editorial" element={<Editorial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;