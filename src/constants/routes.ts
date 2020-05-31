type Route = {
  index: string;
  path: string;
  titleKey: string;
  icon: string;
};
const routes: Route[] = [
  {
    index: 'home',
    path: '/',
    titleKey: 'navigation.index',
    // icon: 'aside-nav-home',
    icon: 'fa-home',
  },
  {
    index: 'bg',
    path: '/bulgaria',
    titleKey: 'navigation.bulgaria',
    // icon: 'aside-nav-bg',
    icon: 'fa-map-signs',
  },
  {
    index: 'abroad',
    path: '/abroad',
    titleKey: 'navigation.abroad',
    // icon: 'aside-nav-abroad',
    icon: 'fa-globe-europe',
  },
];
export default routes;
