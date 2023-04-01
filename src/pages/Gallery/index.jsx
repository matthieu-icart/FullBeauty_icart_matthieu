// IMPORT REACT
import React from 'react';

// IMPORT COMPONENTS
import Square from '../../components/Square/index';

// IMPORT DATAS
import PaysagePictures from '../../datas/paysage';
import SquarePictures from '../../datas/square';

// IMPORT STYLE
import '../../css/style.css';

// RETURN GALLERY
function Gallery() {
  // IMPORT DATAS
  const picturesForPaysage = PaysagePictures;
  const picturesForSquare = SquarePictures;
  return (
    <main className="gallery">
      <h2>Nos prestations</h2>
      <Square squareList={picturesForSquare} />
      <h2>Notre Institut</h2>
      <img
        src={picturesForPaysage[0]}
        alt="Illustrations de l'institut Full Beauty"
      />
      <h3>Accueil</h3>
      <img
        src={picturesForPaysage[1]}
        alt="Illustrations de l'institut Full Beauty"
      />
      <h3>Accueil</h3>
      <img
        src={picturesForPaysage[2]}
        alt="Illustrations de l'institut Full Beauty"
      />
      <h3>Salon</h3>
      <img
        src={picturesForPaysage[3]}
        alt="Illustrations de l'institut Full Beauty"
      />
      <h3>Salon</h3>
      <img
        src={picturesForPaysage[4]}
        alt="Illustrations de l'institut Full Beauty"
      />
    </main>
  );
}

export default Gallery;
