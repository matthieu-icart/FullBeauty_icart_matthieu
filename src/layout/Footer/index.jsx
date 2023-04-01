// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import Logo from '../../components/Logo/index';
import Navigation from '../../components/Navigation/index';

// IMPORT STYLE
import '../../css/style.css';

// RETURN FOOTER
function Footer() {
  return (
    <footer>
      <Navigation />
      <Logo />
    </footer>
  );
}

export default Footer;
