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
    icon: 'aside-nav-home',
  },
  {
    index: 'bg',
    path: '/bulgaria',
    titleKey: 'navigation.bulgaria',
    icon: 'aside-nav-bg',
  },
  {
    index: 'abroad',
    path: '/abroad',
    titleKey: 'navigation.abroad',
    icon: 'aside-nav-abroad',
  },
];
export default routes;
