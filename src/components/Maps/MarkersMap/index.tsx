import React, { ReactElement, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import theme from '../../../constants/theme';

mapboxgl.accessToken = process.env.MAP_BOX_API_KEY || '';

type Marker = {
  id: number;
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
  console.log('%cmarkers', 'background-color:orange; color: white;', markers);

  function initMap(): void {
    if (!map) {
      map = new mapboxgl.Map({
        container: mapRef,
        style: 'mapbox://styles/mapbox/light-v10',
      });
      const markersBounds = new mapboxgl.LngLatBounds();
      markers.forEach(function(marker: Marker) {
        new mapboxgl.Marker().setLngLat(marker.coordinates).addTo(map);
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
    }, 300);
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
