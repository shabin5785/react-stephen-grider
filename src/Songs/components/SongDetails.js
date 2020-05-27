import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return selectedSong ? <div>{selectedSong.title}</div> : "";
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
