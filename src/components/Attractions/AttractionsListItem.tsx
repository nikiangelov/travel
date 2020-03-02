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
  const bucketPath = `site/attractions/600/${data.city_url_slug}/${data.id}`;
  useEffect(() => {
    firebaseGetImages(bucketPath).then(imgs => {
      setImages(imgs);
    });
  }, [data.id]);

  return (
    <div className="movie-card white-card-elevated">
      <Link href={`/abroad/attraction/${data.id}`}>
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
          <span className="d-block text-dark h5 text-truncate title">
            <b>{data.name}</b>
          </span>
          <div className="movie-card-controls-wide">
            <button
              type="button"
              className={`btn ${
                false ? 'btn-primary' : 'btn-light'
              } btn-sm mr-2 mr-lg-0 ml-lg-2`}
            >
              <i className={`${false ? 'fas' : 'far'} fa-bookmark mr-1`} /> За
              гледане
            </button>
            <button
              type="button"
              className={`btn ${
                false ? 'btn-danger' : 'btn-light'
              } btn-sm mr-2 mr-lg-0 ml-lg-2`}
            >
              <i className={`${false ? 'fas' : 'far'} fa-heart mr-1`} /> Любими
            </button>
          </div>
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
        <p className="mb-0 text-muted text-truncate release_date">
          {'D MMMM YYYYг.'}
        </p>
        <p className="mb-0 text-black-50 text-truncate genres">категории</p>
        <p className="text-muted description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          architecto, nulla aspernatur nobis temporibus maiores, dolores in
          recusandae at harum suscipit officia. Exercitationem laboriosam ipsam
          earum consequatur aut quae in.
        </p>
      </div>
    </div>
  );
}

export default AttractionsListItem;
