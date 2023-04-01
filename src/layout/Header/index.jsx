// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import Logo from '../../components/Logo/index';
import Navigation from '../../components/Navigation/index';

// IMPORT STYLE
import '../../css/style.css';

// RETURN HEADER
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
