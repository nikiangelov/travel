import React, { ReactElement } from 'react';
import Link from 'next/link';
import { PopularTravelLog } from '../../constants/dashboardData';

function TravelLogHorizontalListItem({
  title,
  descriptionShort,
  href,
  asPath,
  imageUrl,
}: PopularTravelLog): ReactElement {
  return (
    <div className="user-review-card white-card-elevated mt-4 p-4 mb-6">
      <div className="row">
        <div className="col-3">
          <Link href={href} as={asPath}>
            <a
              className="movie-card-pic no-overlay bg-cover-img mt-n5 user-review-movie-poster"
              data-poster-path="/bm6zKJjKYKrIy3dcnOLk0kF85cl.jpg"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
          </Link>
        </div>
        <div className="col-9">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <Link href="/profile">
                <a
                  className="navbar-user-avatar rounded-circle bg-cover-img mr-2 user-review-avatar"
                  style={{
                    backgroundImage: 'url(/images/avatars/profile256.jpg);',
                  }}
                />
              </Link>
              <span className="h5 mb-0 mr-2">
                <span className="user-review-fullname">Николай</span>{' '}
                <span className="font-weight-normal text-muted">написа </span>
                {/* <b className="user-review-rating">пътепис</b> */}
              </span>
            </div>

            <Link href={href} as={asPath}>
              <a className="btn btn-sm btn-outline-primary">Прочети</a>
            </Link>
          </div>
          <div className="d-flex bg-light py-2 px-3 rounded-lg align-items-start">
            <div className="flex-fill user-review-comment">
              <h6>{title}</h6>
              <p className="mb-0">{descriptionShort}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2 text-muted">
            <small>
              Дестинации:{' '}
              <a href="#" className="user-review-movie-name title">
                Перущица
              </a>
              {', '}
              <a href="#" className="user-review-movie-name title">
                Устина
              </a>
            </small>
            <small className="user-review-date">06 Март 2020г. </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelLogHorizontalListItem;
