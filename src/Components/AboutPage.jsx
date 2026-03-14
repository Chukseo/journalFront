import React from "react";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Journal</h1>
      <p style={styles.paragraph}>
        This edition of Mitochondrial Eve Journal of Post Graduate Studies of the Faculty of Humanities is a good shift from other editions as it is an empirical work of most postgraduate students of the Faculty of Humanities. This special edition has not in doubt launched the journal into the new era of research, discipline and encouragement in academics. The Faculty of Humanities post graduate journal with the title “Mitochondrial  Eve Journal of Humanities Post Graduate Studies” is an evidence of Humanities as the mother eve of all studies as represented by the following departments ( English and  Literary Studies, French, History and International Studies, Igbo and Linguistics, Philosophy, Religion, Peace  and Conflict  Studies and Theatre Arts) which major place of existence lies on the human life and daily activities of human as a communicative specie
      </p>
      <p style={styles.paragraph}>
        Mitochondrial Eve, ordinarily, is regarded as the most recent woman from whom all living humans descended in an unbroken line, purely through their mothers and through the mothers of those mothers, back until all lines converge on one woman. Therefore, it is in recognition and appreciation of the phenomenal roles the Faculty is playing in the promotion of issues concerning mankind and human values of wisdom, truth, knowledge, understanding, etc., that this journal is created. The intent is to promote high- level researches, learning and dexterity among our Post Graduate Students, and assist them in their efforts to fulfill the necessary requirements for their graduation. The Chairman sincerely appreciates the great contributions of scholars who despite their busy schedules accepted our humble requests for professional reviews and advice. To the editors, the advisory board and other relevant and related bodies in the Journal, I strongly appreciate. 

      </p>
      <p style={styles.span}>Prof. Nwankwo Uchenna Martins.</p>
      <p>(Professor of Globalisation, Terrorism and Integration)</p>
      <p>PhD, MHSN, MICDER, MCIR, MHOT.</p>
      <p>Chairman, Editorial Board.</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "40px",
    background: "linear-gradient(135deg, #ffffff 0%, #f7f9fc 100%)",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    lineHeight: "1.8",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

span: {
    fontWeight: "bold",
},

  heading: {
    fontSize: "2.5rem",
    marginBottom: "25px",
    color: "#2c3e50",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "1px",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#444",
    textAlign: "justify",
  },
};

// Optional hover effect for the container
styles.container[":hover"] = {
  transform: "translateY(-5px)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
};

export default AboutPage;