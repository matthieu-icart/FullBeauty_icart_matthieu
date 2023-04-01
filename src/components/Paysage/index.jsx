// IMPORT REACT, USESTATE & USEEFFECT
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN PAYSAGE
function Paysage({ paysageList }) {
  // HOOK USESTATE
  const [index, setIndex] = useState(0);

  // SETINTERVAL
  useEffect(() => {
    const Time = setInterval(() => {
      setIndex((index) => (index + 1) % paysageList.length);
    }, 3000);
    return () => clearInterval(Time);
  }, [paysageList]);

  return (
    <section className="paysage">
      <img
        src={paysageList[index]}
        alt="Illustrations de l'institut de Beauté 'Full Beauty'"
      />
    </section>
  );
}

export default Paysage;
