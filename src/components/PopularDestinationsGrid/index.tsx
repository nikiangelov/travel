import React from 'react';
import GridItem, { DestinationInfo } from './GridItem';

const images: DestinationInfo[] = [
  {
    cityName: 'Рим',
    countryName: 'Италия',
    imageUrl:
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
  },
  {
    cityName: 'Венеция',
    countryName: 'Италия',
    imageUrl:
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    cityName: 'Милано',
    countryName: 'Италия',
    imageUrl:
      'https://images.unsplash.com/photo-1512397739299-fe5a4327d192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    cityName: 'Барселона',
    countryName: 'Испания',
    imageUrl:
      'https://images.unsplash.com/photo-1541777750-47555f6eddaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    cityName: 'Матера',
    countryName: 'Италия',
    imageUrl:
      'https://images.unsplash.com/photo-1536781910396-bb64dbe103e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
