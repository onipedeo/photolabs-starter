import React from "react";

import "../styles/TopicListItem.scss";

//TopicListItem Component
const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span
        onClick={props.getPhotosByTopic}
      >
        {props.topic}
      </span>
    </div>
  );
};

export default TopicListItem;
