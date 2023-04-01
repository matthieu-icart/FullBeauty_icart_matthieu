// IMPORT REACT & NAVLINK
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT STYLE
import '../../css/style.css';

// RETURN NAVIGATION
function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation_pages">
          <li className="navigation_page">
            <NavLink to="/home">Accueil</NavLink>
          </li>
          <li className="navigation_page">
            <NavLink to="/gallery">Gallerie</NavLink>
          </li>
          <li className="navigation_page">
            <NavLink to="/about">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
