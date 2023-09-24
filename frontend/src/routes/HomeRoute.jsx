import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

//Home Route - Loads other components
const HomeRoute = (props) => {
  const { toggleFavorite, favoritedPhotos, photos, topics, getPhotosByTopic } = props

  return (
    <div className="home-route">
      <TopNavigation
        topic={topics}
        favoritedPhotos={favoritedPhotos}
        getPhotosByTopic={getPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        openModalDetails={props.openModalDetails}
      />
    </div>
  );
};

export default HomeRoute;
