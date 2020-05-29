import React, { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import AttractionInterface from '../../interfaces/attraction';
import { firebaseGetImages } from '../../firebase/storage';

interface Props {
  data: AttractionInterface;
}

function AttractionsListItem(props: Props): ReactElement {
  const { data } = props;
  const [images, setImages] = useState();
  const voteCount = 0;
  const voteAverage = 0;
  const bucketPath = `site/attractions/600/${data.city_url_slug}/${data.firebase_storage_path}`;
  useEffect(() => {
    firebaseGetImages(bucketPath).then(imgs => {
      setImages(imgs);
    });
  }, [data._id]);

  return (
    <div className="movie-card white-card-elevated">
      <Link
        href="/abroad/attraction/[id]"
        as={`/abroad/attraction/${data._id}`}
      >
        <a
          className="movie-card-pic bg-cover-img"
          style={{
            backgroundImage: `url(${
              !!images && !!images.length ? images[0] : ''
            })`,
          }}
        />
      </Link>
      <div className="movie-card-controls">
        <button
          type="button"
          className={`movie-card-action ${false ? 'visible  bg-primary' : ' '}`}
          title="Добави в списък за гледане"
        >
          <i className={`${false ? 'fas' : 'far'} fa-bookmark`} />
        </button>
        <button
          type="button"
          className={`movie-card-action ${false ? 'visible bg-danger' : ' '}`}
          title="Добави в любими"
        >
          <i className={`${false ? 'fas' : 'far'} fa-heart`} />
        </button>
      </div>
      <div className="movie-card-float-box">
        <div className="d-lg-flex justify-content-between">
          <span className="d-block text-dark h6 mb-0 text-truncate title">
            <b>{data.name}</b>
          </span>
        </div>
        {!!voteCount && !!voteAverage && (
          <div className="hot-meter-wrap d-flex justify-content-between align-items-center">
            <div className="hot-meter">
              <span style={{ width: `70%` }} />
            </div>
            <small className="rating-text text-black-50">
              {`${voteAverage} / ${voteCount}`}
            </small>
          </div>
        )}
        <p className="my-0 pt-1 small text-black-50 text-truncate genres">
          {data?.description_short}
        </p>
      </div>
    </div>
  );
}

export default AttractionsListItem;
