import { useEffect, useState } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
  }, []); //only once.

  return [lat, errorMessage];
  //community convertion of returning array for destructuring. we can return object as well
};
