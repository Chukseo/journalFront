import React from "react";
import "./OtherJournals.css";

const OtherJournals = () => {
  const journals = [
    {
      title: "Journal One",
      image: "https://via.placeholder.com/300x200?text=Journal+1",
      url: "https://example.com/journal1",
    },
    {
      title: "Journal Two",
      image: "https://via.placeholder.com/300x200?text=Journal+2",
      url: "https://example.com/journal2",
    },
    {
      title: "Journal Three",
      image: "https://via.placeholder.com/300x200?text=Journal+3",
      url: "https://example.com/journal3",
    },
  ];

  return (
    <div className="journals-container">
      <h2 className="journals-heading">Other Journals</h2>
      <div className="journals-grid">
        {journals.map((journal, index) => (
          <a
            key={index}
            href={journal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="journal-card"
          >
            <img src={journal.image} alt={journal.title} />
            <div className="card-content">
              <h3>{journal.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OtherJournals;
