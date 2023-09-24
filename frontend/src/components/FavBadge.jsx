import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// Favbadge component
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  )
};

export default FavBadge;