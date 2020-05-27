import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const KEY = "AIzaSyAxPDbPHv1ZwukQI8FFwsP--jvbDDvIaFI";

class VideoApp extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchTermSubmit = async term => {
    try {
      let res = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: KEY
        }
      });
      console.log(res);
      this.setState({ videos: res.data.items });
      this.setState({ selectedVideo: res.data.items[0] });
    } catch (e) {
      console.log(e);
    }
  };

  onVideoCallback = video => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoCallback}
        />

        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default VideoApp;
