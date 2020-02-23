import strings from './strings';
type Route = {
  index: string;
  path: string;
  title: string;
  icon: string;
};
const routes: Route[] = [
  {
    index: 'home',
    path: '/',
    title: strings.index,
    icon: 'aside-nav-home',
  },
  {
    index: 'bg',
    path: '/bulgaria',
    title: strings.bg,
    icon: 'aside-nav-bg',
  },
  {
    index: 'abroad',
    path: '/abroad',
    title: strings.abroad,
    icon: 'aside-nav-abroad',
  },
];
export default routes;
