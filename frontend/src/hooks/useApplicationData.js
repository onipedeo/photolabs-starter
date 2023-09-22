import { React, useState } from "react";

const useApplicationData = function() {
  const [state, setState] = useState({
    displayModal: false,
    favoritedPhotos: [],
    clickedPhoto: null
  });

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritedPhotos.includes(photoId)) {
      const copyOfFavorites = [...state.favoritedPhotos].filter((id) => id !== photoId);
      setState({
        ...state,
        favoritedPhotos: copyOfFavorites

      })
      return;
    }
    setState({
      ...state,
      favoritedPhotos: [...state.favoritedPhotos, photoId]
    })
  }

  const setPhotoSelected = (openModalDetails) => {
    setState({
      ...state,
      displayModal: true,
      clickedPhoto: openModalDetails
    })
  }

  const onClosePhotoDetailsModal = () => {
    setState({
      ...state,
      displayModal: false,
      clickedPhoto: null
    })
  }

  return {
    state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal

  }

}

export default useApplicationData;