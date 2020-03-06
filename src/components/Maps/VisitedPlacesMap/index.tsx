import React, { ReactElement, useEffect, useState } from 'react';
import {
  worldBounds,
  mapStyle,
  europeBounds,
  bulgariaBounds,
} from '../../../constants/map';

import mapboxgl from 'mapbox-gl';
import theme from '../../../constants/theme';
import PageSection from '../../Layout/PageSection';
import strings from '../../../constants/strings';
mapboxgl.accessToken = process.env.MAP_BOX_API_KEY || '';

// interface Props {}
function index({}): ReactElement {
  let map: any;
  let mapRef: string | HTMLDivElement = '';

  function jumpToBounds(bounds: string): boolean {
    if (!map) return false;
    switch (bounds) {
      case 'world':
        map.fitBounds(worldBounds);
        break;
      case 'europe':
        map.fitBounds(europeBounds);
        break;
      case 'bulgaria':
        map.fitBounds(bulgariaBounds);
        break;
    }
    return true;
  }
  function initMap(): void {
    const visited = {
      countries: [
        {
          name: 'Spain',
          last: 2011,
          notes: 'Hot weather',
        },
        {
          name: 'Italy',
          last: 2015,
          notes: 'Tasty food',
        },
        {
          name: 'France',
          last: 2018,
          notes: '',
        },
      ],
      cities: [
        {
          code: 'PDV',
        },
        {
          code: 'PAZ',
        },
        {
          code: 'SOF',
        },
      ],
    };
    const style = JSON.parse(JSON.stringify(mapStyle));
    function alphaForYear(year: any): number {
      return 0.9 - 0.5 * Math.min(1, (new Date().getFullYear() - year) / 10);
    }
    const addedStyleLayers = [];
    visited.countries.forEach(function(country: any) {
      const id = country.name.replace(' ', '-').toLowerCase();
      const countryLayer: any = {
        id: id,
        type: 'fill',
        source: 'countries',
        'source-layer': 'countries',
        filter: ['==', 'name', country.name],
        // paint: {
        //   "fill-color":
        //     "rgba(241,163,64," + alphaForYear(country.last) + ")"
        // },
        paint: {
          'fill-color': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            'rgba(241,163,255, 1)',
            'rgba(241,163,64,' + alphaForYear(country.last) + ')',
          ],
        },
      };
      countryLayer['paint.selected-' + id] = {
        'fill-color': 'red',
      };
      style.layers.splice(3, 0, countryLayer);
      addedStyleLayers.push(id);
    });

    visited.cities.forEach(function(city: any) {
      const id = city.code;
      const cityLayer: any = {
        id: id,
        type: 'fill',
        source: 'cities',
        'source-layer': 'bulgaria-provinces',
        filter: ['==', 'nuts3', id],
        paint: {
          'fill-color': 'rgba(241,163,64, 1)',
        },
      };
      cityLayer['paint.selected-' + id] = {
        'fill-color': 'red',
      };
      style.layers.splice(3, 0, cityLayer);
      addedStyleLayers.push(id);
    });

    style.transition = {
      duration: 0,
      delay: 0,
    };
    if (!map) {
      map = new mapboxgl.Map({
        container: mapRef,
        style: style,
        dragRotate: false,
      });

      map.on('load', function() {
        jumpToBounds('world');
      });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      initMap();
    }, 300);
  });
  return (
    <PageSection
      title={strings.myVisitedPlaces}
      titleRightComponent={(): ReactElement => (
        <SwitcherButtons onChange={jumpToBounds} />
      )}
    >
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
    </PageSection>
  );
}

type SwitcherButtonsProps = {
  onChange: Function;
};
function SwitcherButtons({ onChange }: SwitcherButtonsProps): ReactElement {
  const [selectedBound, setSelectedBound] = useState('world');
  const defaultClass = 'btn-light';
  const selectedClass = 'btn-primary text-white';
  function jumpToBounds(bound: string): boolean {
    setSelectedBound(bound);
    onChange(bound);
    return true;
  }
  return (
    <div className="d-flex">
      <div className="mb-2 ml-auto">
        <button
          onClick={(): boolean => jumpToBounds('world')}
          type="button"
          className={`btn btn-sm ml-2 ${
            selectedBound === 'world' ? selectedClass : defaultClass
          }`}
        >
          Целия свят
        </button>
        <button
          onClick={(): boolean => jumpToBounds('europe')}
          type="button"
          className={`btn btn-sm ml-2 ${
            selectedBound === 'europe' ? selectedClass : defaultClass
          }`}
        >
          Европа
        </button>
        <button
          onClick={(): boolean => jumpToBounds('bulgaria')}
          type="button"
          className={`btn btn-sm ml-2 ${
            selectedBound === 'bulgaria' ? selectedClass : defaultClass
          }`}
        >
          България
        </button>
      </div>
    </div>
  );
}

export default index;
