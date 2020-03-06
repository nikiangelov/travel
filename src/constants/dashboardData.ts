export interface PopularDestination {
  cityName: string;
  countryName: string;
  href: string;
  asPath: string;
  imageUrl: string;
}
export const popularDestinations: PopularDestination[] = [
  {
    cityName: 'Рим',
    countryName: 'Италия',
    href: '/abroad/city/[id]',
    asPath: '/abroad/city/rome',
    imageUrl: 'images/cities/rome/christopher-czermak-7ybKmhDTcz0-unsplash.jpg',
  },
  {
    cityName: 'Венеция',
    countryName: 'Италия',
    href: '/abroad/city/[id]',
    asPath: '/abroad/city/venice',
    imageUrl: 'images/cities/venice/backdrop_mine_thumb.jpg',
  },
  {
    cityName: 'Париж',
    countryName: 'Франция',
    href: '/abroad/city/[id]',
    asPath: '/abroad/city/paris',
    imageUrl: 'images/cities/paris/42-north-fhO8zmW5Mpk-unsplash.jpg',
  },
  {
    cityName: 'Барселона',
    countryName: 'Испания',
    href: '/abroad/city/[id]',
    asPath: '/abroad/city/barcelona',
    imageUrl: 'images/cities/barcelona/david-russeler-E0xK8SrIzYA-unsplash.jpg',
  },
  {
    cityName: 'Лондон',
    countryName: 'Великобритания',
    href: '/abroad/city/[id]',
    asPath: '/abroad/city/london',
    imageUrl:
      'images/cities/london/claudio-testa-iqeG5xA96M4-unsplash-thumb.jpg',
  },
];

export interface PopularTravelLog {
  title: string;
  descriptionShort: string;
  href: string;
  asPath: string;
  imageUrl: string;
}

export const popularTravelLogs: PopularTravelLog[] = [
  {
    title: 'Съботна разходка край Пловдив',
    descriptionShort:
      'Еднодневна разходка до водопад Устина, екопътека "По пътя на героите" и "Червената църква" - Перущица',
    href: '/travellogs/[id]',
    asPath: '/travellogs/1',
    imageUrl: '/images/travellogs/nikiangelov/ustina.JPG',
  },

  {
    title: 'Какво да правиш в Банско, през уикенда',
    descriptionShort:
      'Комбинирахме SPA уикенда ни в Банско със живописна разходка до Бъндеришките езера',
    href: '/travellogs/[id]',
    asPath: '/travellogs/1',
    imageUrl: '/images/travellogs/nikiangelov/bansko.jpg',
  },
  {
    title: 'Три дни в Централна България',
    descriptionShort:
      'Преминаване на Стара Планина и посещаване на паметника на Бузлуджа, Шипка, пещерата Бачо Киро',
    href: '/travellogs/[id]',
    asPath: '/travellogs/1',
    imageUrl: '/images/travellogs/nikiangelov/turnovo.JPG',
  },
  {
    title: 'Виж максимално от Рим за 2 дни',
    descriptionShort:
      'Как успяхме да обиколим основните забележителности в Рим само за 2 дни',
    href: '/travellogs/[id]',
    asPath: '/travellogs/1',
    imageUrl: '/images/travellogs/nikiangelov/rome.JPG',
  },
];
