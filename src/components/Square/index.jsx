// IMPORT REACT & USESTATE
import React from 'react';
import { useState } from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN SQUARE
function Square({ squareList }) {
  // HOOK USESTATE
  const [index, setIndex] = useState(1);

  // SUIVANT
  function Suivant() {
    setIndex((oldIndex) => {
      if (oldIndex === squareList.length - 1) {
        oldIndex = 0;
      } else {
        oldIndex = oldIndex + 1;
      }
      return oldIndex;
    });
  }

  // PRECEDENT
  function Precedent() {
    setIndex((oldIndex) => {
      if (oldIndex <= 0) {
        oldIndex = squareList.length - 1;
      } else {
        oldIndex = oldIndex - 1;
      }
      return oldIndex;
    });
  }

  return (
    <section className="square">
      <button id="precedent" onClick={Precedent}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </button>
      <div className="square_image">
        <img
          src={squareList[index]}
          alt="Illustrations des prestations l'institut de Beauté 'Full Beauty'"
        />
      </div>
      <button id="suivant" onClick={Suivant}>
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
}

export default Square;
