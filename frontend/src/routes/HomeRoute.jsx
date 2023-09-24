import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';

const HomeRoute = (props) => {
  const { toggleFavorite, favoritedPhotos, photos, topics, getPhotosByTopic } = props
  console.log(photos);
  return (
    <div className="home-route">
      <TopNavigation topic={topics} favoritedPhotos={favoritedPhotos} getPhotosByTopic={getPhotosByTopic} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} openModalDetails={props.openModalDetails} />
    </div>
  );
};

export default HomeRoute;
