// IMPORT REACT, USESTATE & USEEFFECT
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN SLIDESHOW
function Slider({ sliderPicture }) {
  // HOOK USESTATE
  const [index, setIndex] = useState(0);

  // SET INTERVAL
  useEffect(() => {
    const Time = setInterval(() => {
      setIndex((index) => (index + 1) % sliderPicture.length);
    }, 5000);
    return () => clearInterval(Time);
  }, [sliderPicture]);

  return (
    <section className="slider">
      <img
        src={sliderPicture[index]}
        alt="Illustrations du Salon de Beauté 'Full Beauty'"
      />
    </section>
  );
}

export default Slider;
