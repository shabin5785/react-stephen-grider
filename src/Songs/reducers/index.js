import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "song 1", duration: "4.05" },
    { title: "song 2", duration: "3.45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
