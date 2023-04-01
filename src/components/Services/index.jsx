// IMPORT REACT
import React from 'react';

// IMPORT DATAS
import { datas } from '../../datas/datas';

// IMPORT STYLE
import '../../css/style.css';

// RETURN SERVICES
function Services() {
  return (
    <section className="services">
      {datas.map((delivery) => (
        <article className="services_card" key={delivery.id}>
          <a href={'/service/' + delivery.id}>
            {/*  FACE A */}
            <div className="title">
              <h2>{delivery.title}</h2>
            </div>
            {/*  FACE B */}
            <div className="info">
              <h3 className="info_title">{delivery.title}</h3>
              <p className="accroche">{delivery.accroche}</p>
              <p className="setLink">Prestations & Tarifs</p>
            </div>
          </a>
        </article>
      ))}
    </section>
  );
}

export default Services;
