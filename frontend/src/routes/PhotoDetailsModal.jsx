import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

//Photo Modal Components
const PhotoDetailsModal = (props) => {
  const { id, location, similar_photos, urls, user } = props.photo;
  const { toggleFavorite, favoritedPhotos } = props;

  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" >
          <img
            onClick={props.closeModal}
            src={closeSymbol}
            alt="close symbol"
          />
        </button>

        <div className="photo-details-modal__images">
          <PhotoFavButton
            isFavorited={favoritedPhotos.includes(id)}
            toggleFavorite={() => toggleFavorite(id)}
          />
          <img
            className="photo-details-modal__image"
            src={urls.regular}
            alt="image of Photo"
          />

          <div className="photo-list__user-details">
            <img
              className="photo-list__user-profile"
              src={user.profile}
              alt="profile image"
            />
            <div className="photo-list__user-info ">
              {user.name}
              <div className="photo-list__user-location" >
                {`${location.city}, ${location.country}`}
              </div>
            </div>
          </div>
          <h3>Similar Photos</h3>
          <PhotoList
            photos={Object.values(similar_photos)}
            toggleFavorite={toggleFavorite}
            favoritedPhotos={favoritedPhotos}
          />
        </div>
      </div>
    </>
  )
};

export default PhotoDetailsModal;
