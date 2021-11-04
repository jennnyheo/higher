import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import "../styles/Map.module.css";
function GoogleMap() {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCRZscN4mzQ7TPMcfZX4WqdAfDL9RlYNHw",
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  });
  return <div id="map" ref={googlemap} />;
}
export default GoogleMap;
