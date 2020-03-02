import React from 'react';
import GridItem, { DestinationInfo } from './GridItem';

const images: DestinationInfo[] = [
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
const DestinationsGrid: React.FC = () => {
  return (
    <>
      <div className="base">
        {images.map((destination, i) => (
          <GridItem
            key={i}
            index={i}
            href={destination.href}
            asPath={destination.asPath}
            cityName={destination.cityName}
            countryName={destination.countryName}
            imageUrl={destination.imageUrl}
          />
        ))}
      </div>
      <style jsx>{`
        .base {
          display: grid;
          grid-template-columns: 2fr repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1.5em;
          height: 250px;
        }
        @media (max-width: 770px) {
          .base {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            height: 50vw;
          }
        }
        @media (max-width: 620px) {
          .base {
            height: auto;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default DestinationsGrid;
