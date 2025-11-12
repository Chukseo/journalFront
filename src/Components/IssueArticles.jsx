import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IssueArticles = ({ issue_id }) => {
  const [issue, setIssue] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch issue details
        const issueRes = await fetch(`https://journalapis-p8bu.onrender.com/api/articles/api/issues/${issue_id}/`);
        const issueData = await issueRes.json();
        setIssue(issueData);

        // Fetch articles for this issue
        const articlesRes = await fetch(`https://journalapis-p8bu.onrender.com/api/articles/api/issues/${issue_id}/articles/`);
        const articlesData = await articlesRes.json();

        // Handle both array or object response
        setArticles(Array.isArray(articlesData) ? articlesData : articlesData.articles || []);
      } catch (error) {
        console.error("Error fetching issue/articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [issue_id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      {issue && (
        <>
          <h1 style={styles.issueTitle}>{issue.title}</h1>
          {issue.image_url && (
            <img
              src={issue.image_url}
              alt={issue.title}
              style={styles.issueImage}
            />
          )}
        </>
      )}
      <div style={styles.articleList}>
        {articles.map((article) => (
          <div key={article.id} style={styles.articleCard}>
            <Link to={`/articles/${article.id}/`} style={styles.articleLink}>
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  issueTitle: {
    color: "#060e14ff",
    fontSize: "2rem",
    marginBottom: "10px",
    textAlign: "center",
    margin: "4rem",
    
  },
  issueImage: {
    display: "block",
    margin: "0 auto 20px",
    width: "20%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    // border: "2px solid #4e0404ff",
  },
  articleList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  articleCard: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  articleLink: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#051b58ff",
    textDecoration: "none",

  },
  author: {
    marginTop: "8px",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default IssueArticles;
