import React, { useCallback, useEffect, useRef } from "react";

import "./Map.css";

function Map() {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: 36.321, lng: 127.366 },
      zoom: 17,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      ref={mapRef}
    ></div>
  );
}

export default Map;