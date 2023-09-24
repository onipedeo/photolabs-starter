import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { favoritedPhotos, getPhotosByTopic } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList topics={props.topic} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={favoritedPhotos.length > 0} />

    </div>
  )
}

export default TopNavigation;