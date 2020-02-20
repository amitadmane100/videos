import React from "react";
import VideoItem from "./videoItem";

const videoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default videoList;
