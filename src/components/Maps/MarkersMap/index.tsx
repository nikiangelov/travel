import React, { ReactElement, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import theme from '../../../constants/theme';

mapboxgl.accessToken = process.env.MAP_BOX_API_KEY || '';

type Marker = {
  id: number;
  title: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};
type MarkersMapProps = {
  markers: Marker[];
};

function MarkersMap({ markers }: MarkersMapProps): ReactElement {
  let map: any;
  let mapRef: string | HTMLDivElement = '';

  function initMap(): void {
    if (!map) {
      map = new mapboxgl.Map({
        container: mapRef,
        center: [24.901648, 42.682206],
        zoom: 6,
        style: 'mapbox://styles/mapbox/light-v10',
      });
      const markersBounds = new mapboxgl.LngLatBounds();
      markers.forEach(function(marker: Marker) {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.title);
        new mapboxgl.Marker()
          .setLngLat(marker.coordinates)
          .setPopup(popup)
          .addTo(map);
        const latLng = new mapboxgl.LngLat(
          marker.coordinates.lng,
          marker.coordinates.lat,
        );
        markersBounds.extend(latLng);
      });
      map.fitBounds(markersBounds, {
        padding: 70,
      });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      initMap();
    }, 500);
  }, []);
  return (
    <>
      <div
        ref={(el): any => (el ? (mapRef = el) : false)}
        className="mapContainer"
      />
      <style jsx>{`
        .mapContainer {
          background-color: #eee;
          height: 350px;
          overflow: hidden;
          border-radius: ${theme.sizes.radius}px;
        }
      `}</style>
    </>
  );
}
export default MarkersMap;
