// ArticlePage.js
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import ArticleView from "../Components/ArticleView";

const ArticlePage = () => {
  const { article_id } = useParams();

  return (
    <div>
      <Banner />
      <ArticleView article_id={article_id} />
      <Footer />
    </div>
  );
};

export default ArticlePage;