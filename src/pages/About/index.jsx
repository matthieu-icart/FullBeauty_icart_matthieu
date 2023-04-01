// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import TeamInfo from '../../components/TeamInfo/index';
import Map from '../../components/Map/index';
import Horaire from '../../components/Horaire/index';
import Contact from '../../components/Contact/index';
import Button from '../../components/Button/index';

// IMPORT STYLE
import '../../css/style.css';

// RETURN ABOUT
function About() {
  return (
    <main className="about">
      <TeamInfo />
      <Map />
      <div className="about_information">
        <div>
          <Horaire />
        </div>
        <Contact />
      </div>
      <div className="about_button">
        <Button />
      </div>
    </main>
  );
}

export default About;
