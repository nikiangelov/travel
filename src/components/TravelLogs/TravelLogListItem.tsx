import React, { ReactElement } from 'react';
import Link from 'next/link';
import { PopularTravelLog } from '../../constants/dashboardData';

function TravelLogListItem({
  title,
  descriptionShort,
  href,
  asPath,
  imageUrl,
}: PopularTravelLog): ReactElement {
  return (
    <div className="card travellog-card white-card-elevated hover-translate elevation-4 border-0 border-radius-lg">
      <Link href={href} as={asPath}>
        <a
          className="card-image bg-cover-img"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </Link>
      <div className="card-body">
        <h6 className="card-title mb-2">
          <Link href={href} as={asPath}>
            <a className="text-dark">{title}</a>
          </Link>
        </h6>
        <p className="card-text small text-muted  ">{descriptionShort}</p>
        <Link href={href} as={asPath}>
          <a className="btn btn-sm btn-outline-primary border-radius-lg">
            Прочети пътеписа
          </a>
        </Link>
      </div>
    </div>
  );
}

export default TravelLogListItem;
