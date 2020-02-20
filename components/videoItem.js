import React from "react";
import "./videoList.css"

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-list item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
