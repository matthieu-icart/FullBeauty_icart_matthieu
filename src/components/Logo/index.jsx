// IMPORT REACT & NAVLINK
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT IMAGE
import Corporate from '../../assets/corporate.jpeg';

// IMPORT STYLE
import '../../css/style.css';

// RETURN LOGO
function Logo() {
  return (
    <div className="logo">
      <NavLink to="/home">
        <img
          src={Corporate}
          alt="Logo de l'entreprise Full Beauty représentant un visage déssiné en un seul trait."
        />
        <h1>Full Beauty</h1>
        <img
          src={Corporate}
          alt="Logo de l'entreprise Full Beauty représentant un visage déssiné en un seul trait."
          className="reverse"
        />
      </NavLink>
    </div>
  );
}

export default Logo;
