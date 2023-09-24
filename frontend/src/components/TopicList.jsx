import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

//TopicList Component
const TopicList = (props) => {

  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic.title}
          getPhotosByTopic={() => props.getPhotosByTopic(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
