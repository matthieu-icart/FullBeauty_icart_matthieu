// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import ServiceHeader from '../../components/ServiceHeader/index';
import Prestations from '../../components/Prestations/index';

// IMPORT STYLE
import '../../css/style.css';

// RETURN SERVICE
function Service() {
  return (
    <main className="service">
      <ServiceHeader />
      <Prestations />
    </main>
  );
}

export default Service;
