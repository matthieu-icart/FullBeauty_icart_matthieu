// IMPORT REACT & USEPARAMS
import React from 'react';
import { useParams } from 'react-router-dom';

// IMPORT DATAS
import { datas } from '../../datas/datas';

// IMPORT COMPONENTS
import Prestation from '../../components/Prestation/index';
import Button from '../../components/Button/index';

// IMPORT STYLE
import '../../css/style.css';

// RETURN DELIVERY
function Prestations() {
  // GET DATAS
  let { id } = useParams();
  let service = datas.find((service) => service.id === id);
  let prestations = service.prestations;
  return (
    <section className="prestations">
      {prestations.map((prestation) => (
        <Prestation
          key={prestation.id}
          title={prestation.name}
          duration={prestation.duration}
          price={prestation.price}
          description={prestation.description}
        />
      ))}
      <Button />
    </section>
  );
}

export default Prestations;
