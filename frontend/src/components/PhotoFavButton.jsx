import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//Favorite button
function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon" onClick={props.toggleFavorite}>
      <div className="photo-list__fav-icon-svg"  >
        <FavIcon
          selected={props.isFavorited}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;