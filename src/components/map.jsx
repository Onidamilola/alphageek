import React, { useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapComponent = ({ gio_lat, gio_long, google }) => {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: { lat: 9.0820, lng: 8.6753 },
        zoom: 3,
      };
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);

      // Optionally, add a marker for the specified location
      new google.maps.Marker({
        position: { lat: 6.53562, lng: 3.3892993 },
        map: map,
        title: 'My Location',
      });
    };

    if (document.getElementById('map')) {
      initMap();
    }

    return () => {
      // Clean up if needed
    };
  }, [gio_lat, gio_long, google]);

  return (
    <div className="map-container">
      <div id="map" className="map"></div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapComponent);
