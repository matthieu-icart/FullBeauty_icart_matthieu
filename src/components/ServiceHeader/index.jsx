// IMPORT REACT & USEPARAMS
import React from 'react';
import { useParams } from 'react-router-dom';

// IMPORT DATAS
import { datas } from '../../datas/datas';

// IMPORT STYLE
import '../../css/style.css';

// RETURN DELIVERY
function ServiceHeader() {
  let { id } = useParams();
  let service = datas.find((service) => service.id === id);
  return (
    <section className="ServiceHeader">
      <h2>{service.title}</h2>
      <p className="accroche">{service.accroche}</p>
      <p className="explication">{service.explication}</p>
    </section>
  );
}

export default ServiceHeader;
