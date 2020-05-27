import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  // return <div onClick={onVideoClick(video)}>{video}</div>; this way onclick wont call fn with video
  return <div onClick={() => onVideoClick(video)}>{video}</div>;
};

export default VideoItem;
