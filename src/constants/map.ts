export const worldBounds = [
  [-180, -55],
  [180, 75],
];

export const bulgariaBounds = [
  [22.357432, 41.238374],
  [28.705649, 44.215636],
];
export const europeBounds = [
  [-39.6, 30],
  [70.09, 65.25],
];

export const mapStyle = {
  version: 8,
  sources: {
    mapbox: {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-streets-v7',
    },
    countries: {
      type: 'vector',
      url: 'mapbox://justin.d6fe2f0a',
    },
    cities: {
      type: 'vector',
      url: 'mapbox://nikidevelops.ck6ws67m612f42nphsek34sjy-75k5y',
    },
  },
  // sprite: "https://www.mapbox.com/mapbox-gl-styles/sprites/sprite",
  glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': 'rgb(247,247,247)',
      },
    },
    {
      id: 'waterway',
      type: 'line',
      source: 'mapbox',
      'source-layer': 'waterway',
      filter: [
        'all',
        ['==', '$type', 'LineString'],
        ['in', 'class', 'river', 'canal'],
      ],
      paint: {
        'line-color': '#a0cfdf',
        'line-width': {
          base: 1.4,
          stops: [
            [8, 0.5],
            [20, 15],
          ],
        },
      },
    },
    {
      id: 'water',
      type: 'fill',
      source: 'mapbox',
      'source-layer': 'water',
      paint: {
        'fill-color': '#a0cfdf',
      },
    },
    {
      id: 'admin_states_provinces',
      type: 'line',
      source: 'cities',
      'source-layer': 'bulgaria-provinces',
      minzoom: 2,
      // filter: ["any", ["==", "iso_a2", "BG"]],
      layout: {
        'line-join': 'round',
      },
      paint: {
        'line-color': '#8b8a8a',
        'line-dasharray': [10, 3],
        'line-width': 0.5,
      },
    },
    {
      id: 'admin_country',
      type: 'line',
      source: 'mapbox',
      'source-layer': 'admin',
      filter: [
        'all',
        ['<=', 'admin_level', 2],
        ['==', 'maritime', 0],
        ['==', '$type', 'LineString'],
      ],
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': '#8b8a8a',
        'line-width': {
          base: 1.3,
          stops: [
            [3, 0.5],
            [22, 15],
          ],
        },
      },
    },
    {
      id: 'place_label_city',
      type: 'symbol',
      source: 'mapbox',
      'source-layer': 'place_label',
      maxzoom: 16,
      filter: ['all', ['==', '$type', 'Point'], ['==', 'type', 'city']],
      layout: {
        'text-field': '{name_en}',
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-max-width': 10,
        'text-size': {
          stops: [
            [3, 12],
            [8, 16],
          ],
        },
      },
      paint: {
        'text-color': '#666',
        'text-halo-color': 'rgba(255,255,255,0.75)',
        'text-halo-width': 1,
        'text-halo-blur': 1,
      },
    },
    {
      id: 'country_label',
      type: 'symbol',
      source: 'mapbox',
      'source-layer': 'country_label',
      maxzoom: 12,
      filter: [
        'all',
        ['==', '$type', 'Point'],
        ['!=', 'name', 'United States'],
      ],
      layout: {
        'text-field': '{name_en}',
        'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
        'text-max-width': 10,
        'text-size': {
          stops: [
            [3, 14],
            [8, 22],
          ],
        },
      },
      paint: {
        'text-color': '#666',
        'text-halo-color': 'rgba(255,255,255,0.75)',
        'text-halo-width': 1,
        'text-halo-blur': 1,
      },
    },
  ],
};

export default {
  worldBounds,
  bulgariaBounds,
  europeBounds,
};
