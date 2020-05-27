import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "../Spinner/Spinner";

import useLocation from "./useLocation";

const SeasonApp = () => {
  const [lat, errorMessage] = useLocation();
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please choose location..." />;
  }

  return <div>{content}</div>;
};

export default SeasonApp;
