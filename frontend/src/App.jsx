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

  return (
    <div className="App">
      <HomeRoute openModalDetails={openModalDetails} />
      {showModal && <PhotoDetailsModal photo={clickedPhoto} closeModal={closeModal} />}
    </div>
  );
};

export default App;
