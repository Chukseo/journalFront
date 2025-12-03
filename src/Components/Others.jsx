import React from "react";
import "./Others.css";

const OtherJournals = () => {
  const journals = [
    {
      title: "Juvenile Journal",
      image: "https://ugtf.org/img/cver25.png",
      url: "https://juvejournalimsu.netlify.app/",
    },
    {
      title: "Kpakpando",
      image: "https://ugtf.org/img/hist.png",
      url: "https://kpakpandoimsu.netlify.app/",
    },
    {
      title: "Odeeokaa",
      image: "https://ugtf.org/img/eng.png",
      url: "https://odeeokaaimsu.netlify.app/",
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
