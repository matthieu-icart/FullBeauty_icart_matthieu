// IMPORT REACT & USESTATE
import React from 'react';
import { useState } from 'react';

// IMPORT STYLE
import '../../css/style.css';

// RETURN PRESTATION
function Prestation({ title, duration, price, description }) {
  // HOOK USESTATE
  const [isOpen, setOpen] = useState(false);
  return (
    <article className="prestation">
      {/* FACE A */}
      <button className="button" onClick={() => setOpen((state) => !state)}>
        <div className="card">
          <div className="faceA">
            <h3>{title}</h3>
            <div className="details">
              <div className="detail">
                <p className="duration">{duration}</p>
                <p className="price">{price}</p>
              </div>
              {/* SHOW DOWN ICON */}
              {description && (
                <div className={`showDown ${isOpen ? 'close' : 'open'}`}>
                  <i className="fa-sharp fa-solid fa-angle-down"></i>
                </div>
              )}
              {/* HIDDEN SHOW DOWN ICON */}
              {!description && (
                <div className="showDown">
                  <i className="fa-sharp fa-solid fa-angle-down hidden"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </button>

      {/* FACE B */}
      {description && (
        <div className={`description ${isOpen ? 'open' : 'close'}`}>
          <button className="faceB" onClick={() => setOpen((state) => !state)}>
            <br />
            <p>{description}</p>
            <br />
            <i className="fa-sharp fa-solid fa-angles-up"></i>
          </button>
        </div>
      )}
    </article>
  );
}

export default Prestation;
