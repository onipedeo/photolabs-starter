import { useEffect, useReducer } from "react";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

//Intial States
const initialState = {
  displayModal: false,
  favoritedPhotos: [],
  clickedPhoto: null,
  photoData: [],
  topicData: []
};

//Use Reducer to manage state changes
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload }

    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritedPhotos: [...state.favoritedPhotos, action.payload] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload) };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, displayModal: true, clickedPhoto: action.payload };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: false, clickedPhoto: null };

    default:
      return state;
  }
};

//Custom Hook
const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const setPhotoSelected = (openModalDetails) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: openModalDetails });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  }

  //API Calls - Photos
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(photosData => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosData });
      })
  }, [])

  //API Calls - Topics
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(topicsData => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicsData });
      })
  }, [])

  //API Calls - Photos by Topic for the Top Navigation
  const getPhotosByTopic = (id) => {
    return fetch(`/api/topics/photos/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      })
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopic
  }

}

export default useApplicationData;