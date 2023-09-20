import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, urls, user } = props.photo;
  const { favoritedPhotos, toggleFavorite } = props;

  const onClick = () => {
    props.openModalDetails(props.photo);

  }
  const isFavorited = favoritedPhotos && favoritedPhotos.includes(id);

  return (
    <>
      <div className="photo-list__item">
        <PhotoFavButton isFavorited={isFavorited} toggleFavorite={() => toggleFavorite(id)} />
        <img className="photo-list__image" src={urls.regular}
          onClick={onClick} alt="image of Photo" />

        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={user.profile} alt="profile image" />
          <div className="photo-list__user-info ">
            {user.name}
            <div className="photo-list__user-location" >
              {`${location.city}, ${location.country}`}
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default PhotoListItem;
