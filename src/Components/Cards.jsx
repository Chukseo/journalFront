import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Cards.css';

const styles = {
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#2c3e50',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '3px solid #3498db',
    paddingBottom: '5px',
    width: '100%'   // ✅ ensures full width so textAlign works
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: '10px'
  },
  placeholder: {
    width: '100%',
    height: '200px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    padding: '10px',
    fontSize: '1rem',
    color: '#333'
  }
};

const Cards = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await fetch("https://journalapis-p8bu.onrender.com/api/journals/1/issues/", {
          headers: { "Accept": "application/json" },
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();

        const normalized = (Array.isArray(data) ? data : data.results || []).map(Issue => ({
          id: Issue.id ?? Issue.pk ?? Math.random(),
          title: Issue.title ?? Issue.name ?? "Untitled",
          imageUrl: Issue.image_url ?? Issue.cover_image ?? Issue.thumbnail ?? "",
        }));

        setItems(normalized); // ✅ show all issues
      } catch (e) {
        setError(e.message || "Failed to load issues");
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  if (loading) return (
    <div className="loader">
      <span></span><span></span><span></span>
    </div>
  );
  if (error) return <div style={{ color: "crimson" }}>Error: {error}</div>;
  if (!items.length) return (
    <div className="empty-state">
      <h2>No Issue Found</h2>
      <p>Try refreshing the page or check in later</p>
    </div>
  );

  return (
    <div>
      {/* ✅ Centered Stylish Heading */}
      <h2 style={styles.heading}>All Issues</h2>

      <div className="grid">
        {items.map(item => (
          <Link 
            to={`/Issue/${item.id}`}   // ✅ navigate to Issue page by ID
            key={item.id}
            style={{ textDecoration: 'none' }}
          >
            <div style={styles.card}>
              <div className="imageWrap">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                ) : (
                  <div style={styles.placeholder}>No image</div>
                )}
              </div>
              <div style={styles.title}>{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
