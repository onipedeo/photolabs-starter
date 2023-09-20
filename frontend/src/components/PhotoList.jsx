import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss"
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { toggleFavorite, favoritedPhotos } = props;
  return (
    <>
      <ul className="photo-list">
        {props.photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} openModalDetails={props.openModalDetails} />
        ))}
      </ul >
    </>
  );
};

export default PhotoList;
