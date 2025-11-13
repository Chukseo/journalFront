import React, { useEffect, useState } from "react";
import './ArticleView.css';

const ArticleView = ({ article_id }) => {
  const [article, setArticle] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const resArticle = await fetch(`https://journalapis-p8bu.onrender.com/api/articles/${article_id}/`);
        const articleData = await resArticle.json();
        setArticle(articleData);

        
        const resAuthors = await fetch(`https://journalapis-p8bu.onrender.com/api/articles/${article_id}/authors/`);
        const authorsData = await resAuthors.json();
        setAuthors(Array.isArray(authorsData) ? authorsData : []);
      } catch (err) {
        console.error("Error fetching article or authors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [article_id]);

  if (loading) return (
  <div className="loader">
    <span></span><span></span><span></span>
  </div>
);

  if (!loading && !article) {
    return (
      <div className="empty-state">
        <h2>No Article Found</h2>
        <p>Try refreshing or adding new content.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Title */}
      <h1 style={styles.title}>{article.title}</h1>

      {/* Authors */}
      <h3 style={styles.author}>
        <br />
        <br />
        By
        <br />
        {authors.length > 0 ? authors.map(a => a.name).join(", ") : "Unknown Author"}
      </h3>
        <br />
        <br />
        <br />
      <div style={styles.content}>
        {/* Abstract + Keywords */}
        <div style={{ flex: "1 1 60%" }}>
          <p style={styles.abstractT}>Abstract</p>
          <p style={styles.abstract}>{article.abstract}</p>
          {article.keywords && (
            <p style={styles.abstract}><strong>Keywords:</strong> {article.keywords}</p>
          )}
        </div>

      
        <div style={styles.issueBox}>
          {article.issue?.image_url && (
            <img
              src={article.issue.image_url}
              alt={article.issue.title}
              style={styles.issueImage}
            />
          )}
          <p style={styles.issueTitle}>{article.issue?.title}</p>
        </div>
      </div>

      {article.pdf_url ? (
        <a href={article.pdf_url} target="_blank" rel="noopener noreferrer" style={styles.pdfLink}>
          📄 Download PDF
        </a>
      ) : (
        <p style={{ color: "#888", fontStyle: "italic" }}>No PDF available</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "3rem auto",
    padding: "4rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#0A3D62",
    marginBottom: "10px",
    textAlign: "center",
  },
  author: {
    fontSize: "1.2rem",
    color: "#1f1b55ff",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
  },
  abstractT: {
    fontSize: "2rem",
    lineHeight: "1.6",
    color: "#0e074dff",
    textAlign: "left",
    marginBottom: "10px",
  },

  linkStyle: {
    display: "inline-block",
    marginTop: "15px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#032446",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  },

  abstract: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#111111ff",
    textAlign: "left",
    marginBottom: "10px",
  },
  issueBox: {
    flex: "1 1 35%",
    textAlign: "center",
  },
  issueImage: {
    maxWidth: "100%",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  issueTitle: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#0A3D62",
  },
year: {
  fontSize: "1rem",
  color: "#444",
  marginTop: "10px",
  textAlign: "center",
},

pdfLink: {
    display: "block",
    marginTop: "15px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#032446ff",
    textDecoration: "none",
  },
};


export default ArticleView;

