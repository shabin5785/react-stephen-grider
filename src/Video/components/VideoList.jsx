import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const VideoRefererList = videos.map(video => {
    return <VideoItem video={video} onVideoClick={onVideoSelect} />;
  });

  return VideoRefererList;
};

export default VideoList;
