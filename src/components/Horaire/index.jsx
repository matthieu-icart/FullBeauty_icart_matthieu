// IMPORT REACT
import React from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN INFORMATIONS
function Horaire() {
  return (
    <section className="horaire">
      <h2>Horaires d'ouverture</h2>
      <article className="time">
        <div className="day">
          <p>{'Lundi'} </p>
          <p>{'10H30 - 19H00'} </p>
        </div>
        <div className="day">
          <p>{'Mardi'} </p>
          <p>{'10H30 - 19H00'} </p>
        </div>
        <div className="day">
          <p>{'Mercredi'} </p>
          <p>{'10H30 - 18H30'} </p>
        </div>
        <div className="day">
          <p>{'Jeudi'} </p>
          <p>{'10H30 - 19H00'} </p>
        </div>
        <div className="day">
          <p>{'Vendredi'} </p>
          <p>{'10H30 - 18H30'} </p>
        </div>
        <div className="day">
          <p>{'Samedi'} </p>
          <p>{'10H30 - 18H30'} </p>
        </div>
        <div className="day">
          <p>{'Dimanche'} </p>
          <p>{'FERME'} </p>
        </div>
      </article>
    </section>
  );
}

export default Horaire;
