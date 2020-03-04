import React, { ReactElement } from 'react';
import Link from 'next/link';
import theme from '../../constants/theme';
import { PopularDestination } from '../../constants/dashboardData';

interface Props extends PopularDestination {
  index: number;
}

export default function GridItem({
  index,
  cityName,
  countryName,
  href,
  asPath,
  imageUrl,
}: Props): ReactElement {
  return (
    <>
      <Link href={href} as={asPath}>
        <a
          className="grid-item white-card-elevated hover-translate bg-cover-img"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <span className="d-flex overlay px-4 py-3">
            <span className="d-flex justify-content-between">
              <span>
                <strong
                  className={`${
                    !index ? 'h2' : 'h5'
                  } d-block font-weight-bold mb-0`}
                >
                  {cityName}
                </strong>
                <span className="m-0 opacity-90">{countryName}</span>
              </span>
              <span>{/* TODO */}</span>
            </span>
          </span>
        </a>
      </Link>
      <style jsx>{`
        .grid-item {
          display: block;
          border-radius: ${theme.sizes.radius * 2}px;
          position: relative;
          min-height: 100px;
          ${!index ? 'grid-row-start: 1; grid-row-end: 3;' : ''}
        }
        .overlay {
          flex-direction: column;
          justify-content: flex-end;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          color: white;
          border-radius: ${theme.sizes.radius * 2}px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) ${!index ? '50%' : '25%'},
            rgba(0, 0, 0, 0.6) 100%
          );
        }
      `}</style>
    </>
  );
}
