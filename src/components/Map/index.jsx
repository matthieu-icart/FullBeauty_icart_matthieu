// IMPORT REACT & IFRAME
import React from 'react';
import Iframe from 'react-iframe';

// IMPORT STYLE
import '../../css/style.css';

// RETURN INFORMATIONS
function Map() {
  return (
    <section className="map">
      <Iframe
        className="iframe"
        id="mapId"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.605313470838!2d4.844582015646375!3d45.75905797910548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5e9b297d43%3A0xf2a8eadb3d9b1645!2s232%20Rue%20Vend%C3%B4me%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1674984326616!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </section>
  );
}

export default Map;
