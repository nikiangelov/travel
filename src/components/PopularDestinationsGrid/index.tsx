import React from 'react';
import GridItem from './GridItem';
import { popularDestinations } from '../../constants/dashboardData';
import useI18n from '../../hooks/useI18n';

const DestinationsGrid: React.FC = () => {
  const i18n = useI18n();
  return (
    <>
      <div className="base">
        {popularDestinations.map((destination, i) => (
          <GridItem
            key={i}
            index={i}
            href={destination.href}
            asPath={destination.asPath}
            cityName={i18n.t(`cities.${destination.cityNameKey}`)}
            countryName={i18n.t(`countries.${destination.countryNameKey}`)}
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
