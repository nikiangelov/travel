const colors = {
  primaryDarker: '#E08308',
  primaryDark: '#F5900A',
  primary: '#F7AA39',

  // neutrals
  grey100: '#f8f9fa',
  grey200: '#e9ecef',
  grey300: '#dee2e6',
  grey400: '#ced4da',
  grey500: '#adb5bd',
  grey600: '#6c757d',
  grey700: '#495057',

  // ----- old ones
  transparent: 'rgba(0, 0, 0, 0)',
  base: '#1A1F25',
  baseLight: '#182633',
  baseLight2: '#253b50',
  baseLight3: '#3c556d',
  accent: '#C72C41',
  accentLight: '#EE4540',
  success: '#04AE4C',
  tertiary: '#238fdb',

  // neutral
  white: '#FFFFFF',
  whiteFaded7: 'rgba(255, 255, 255, .7)',
  whiteFaded5: 'rgba(255, 255, 255, .5)',
  gray: '#dedede',
  grayDarker: '#9a9a9a',
  grayLight: '#efefef',

  danger: '#e57373',
  dangerDark: '#cb4747',

  // --- old
  secondary: '#2BDA8E',
  black: '#323643',
};

const sizes = {
  // global sizes
  topOffset: 45,
  asideNavigationWidth: 115,
  radius: 6,

  // ---- old ones
  header: 55,
  tabBar: 50,
  subTabBar: 42,
  point: 8,
  pointHalf: 4,
  base: 16,
  font: 14,
  fontSmaller: 12,
  lineHeight: 20,
  radiusSmaller: 3,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  h4: 16,
  title: 24,
  body: 14,
};

const fonts = {
  base: {
    fontSize: sizes.base,
  },
  smaller: {
    fontSize: sizes.font - 2,
    lineHeight: sizes.lineHeight - 2,
  },
  h1: {
    fontSize: sizes.h1,
    lineHeight: sizes.h1 + 6,
  },
  h2: {
    fontSize: sizes.h2,
    lineHeight: sizes.h2 + 6,
  },
  h3: {
    fontSize: sizes.h3,
    lineHeight: sizes.h3 + 6,
  },
};

export default { colors, sizes, fonts };
