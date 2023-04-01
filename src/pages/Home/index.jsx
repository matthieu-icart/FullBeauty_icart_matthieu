// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import Paysage from '../../components/Paysage/index';
import Services from '../../components/Services/index';

// IMPORT DATAS
import PaysagePictures from '../../datas/paysage';

// IMPORT STYLE
import '../../css/style.css';

// RETURN HOME
function Home() {
  const picturesForPaysage = PaysagePictures;
  return (
    <main className="home">
      <div className="home_pictures">
        <Paysage paysageList={picturesForPaysage} />
      </div>
      <Services />
    </main>
  );
}

export default Home;
