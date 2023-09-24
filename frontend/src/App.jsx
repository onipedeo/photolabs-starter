import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute openModalDetails={setPhotoSelected} toggleFavorite={updateToFavPhotoIds} favoritedPhotos={state.favoritedPhotos} />
      {state.clickedPhoto && <PhotoDetailsModal photo={state.clickedPhoto} closeModal={onClosePhotoDetailsModal} toggleFavorite={updateToFavPhotoIds} favoritedPhotos={state.favoritedPhotos} />}
    </div>
  );
};

export default App;
