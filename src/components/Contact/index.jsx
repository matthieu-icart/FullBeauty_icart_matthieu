// IMPORT REACT
import React from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN CONTACT
function Contact() {
  const link = 'https://www.planity.com/full-beauty-69003-lyon';
  return (
    <section className="contact">
      <h2>Contact</h2>
      <article className="coordonnees">
        <div className="contact_information">
          <a href={link}>Prendre Rendez-vous en ligne</a>
        </div>
        <div className="contact_information">
          <p>{'292 Rue Vendôme 69003 Lyon'}</p>
        </div>
        <div className="contact_information">
          <p>{'07 61 49 53 23'} </p>
        </div>
      </article>
    </section>
  );
}

export default Contact;
