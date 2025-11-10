import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/Banner";       
import Footer from "../Components/Footer";       
import IssueArticles from "../Components/IssueArticles"; 

const IssuePage = () => {
  const { issue_id } = useParams();



 return (
    <div>
      <Banner />
      <IssueArticles issue_id={issue_id} />
      <Footer />
    </div>
  );
};

export default IssuePage;
