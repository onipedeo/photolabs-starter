import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = (props) => {


  //Setting state for the favorited photos
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  //Function to toggle favorites
  const toggleFavorite = (photoId) => {
    // console.log("inside togglefav", photoId);
    // console.log("favoritePhotos", favoritedPhotos);
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  }

  return (
    <div className="home-route">
      <TopNavigation topic={topics} favoritedPhotos={favoritedPhotos} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} openModalDetails={props.openModalDetails} />
    </div>
  );
};

export default HomeRoute;
