import React from "react";

const AboutJournal = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Journal</h2>
      <p style={styles.paragraph}>
        This edition of Mitochondrial Eve Journal of Post Graduate Studies of the Faculty of Humanities is a good shift from other editions as it is an empirical work of most postgraduate students of the Faculty of Humanities. This special edition has not in doubt launched the journal into the new era of research, discipline and encouragement in academics. The Faculty of Humanities post graduate journal with the title “Mitochondrial  Eve Journal of Humanities Post Graduate Studies” is an evidence of Humanities as the mother eve of all studies as represented by the following departments ( English and  Literary Studies, French, History and International Studies, Igbo and Linguistics, Philosophy, Religion, Peace  and Conflict  Studies and Theatre Arts) which major place of existence lies on the human life and daily activities of human as a communicative specie
      </p>
      <a href="/about" style={styles.button}>
        Read More
      </a>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "70rem",
    margin: "40px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "25px",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
};

// Add hover effects with CSS-in-JS
styles.container[":hover"] = {
  transform: "translateY(-5px)",
  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
};

styles.button[":hover"] = {
  backgroundColor: "#357ABD",
  transform: "scale(1.05)",
};

export default AboutJournal;