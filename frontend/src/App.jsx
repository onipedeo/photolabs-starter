import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const openModalDetails = (photo) => {
    setShowModal(true);
    setClickedPhoto(photo)
  }

  const closeModal = () => {
    setShowModal(false);
    setClickedPhoto(null);
  }

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
    <div className="App">
      <HomeRoute openModalDetails={openModalDetails} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} />
      {showModal && <PhotoDetailsModal photo={clickedPhoto} closeModal={closeModal} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} />}
    </div>
  );
};

export default App;
