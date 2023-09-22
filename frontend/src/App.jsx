import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [clickedPhoto, setClickedPhoto] = useState(null);

  // const openModalDetails = (photo) => {
  //   setShowModal(true);
  //   setClickedPhoto(photo)
  // }

  // const closeModal = () => {
  //   setShowModal(false);
  //   setClickedPhoto(null);
  // }

  // //Setting state for the favorited photos
  // const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // //Function to toggle favorites
  // const toggleFavorite = (photoId) => {
  //   // console.log("inside togglefav", photoId);
  //   // console.log("favoritePhotos", favoritedPhotos);
  //   if (favoritedPhotos.includes(photoId)) {
  //     setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
  //   } else {
  //     setFavoritedPhotos([...favoritedPhotos, photoId]);
  //   }
  // }
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute openModalDetails={setPhotoSelected} toggleFavorite={updateToFavPhotoIds} favoritedPhotos={state.favoritedPhotos} />
      {state.clickedPhoto && <PhotoDetailsModal photo={state.clickedPhoto} closeModal={onClosePhotoDetailsModal} toggleFavorite={updateToFavPhotoIds} favoritedPhotos={state.favoritedPhotos} />}
    </div>
  );
};

export default App;
