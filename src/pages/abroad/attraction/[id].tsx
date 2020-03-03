import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AnimatedLayout from '../../../components/Layout/AnimatedLayout';
import withApollo from '../../../apollo/with-apollo';
import { useAttractionQuery } from '../../../apollo/queries/attractions.graphql';
import LoadingState from '../../../components/LoadingStates/CityDetails';
import { firebaseGetImages } from '../../../firebase/storage';

function AttractionDetail(): ReactElement {
  const router = useRouter();
  const [images, setImages] = useState();
  const attractionId = router.query.id;
  const { data } = useAttractionQuery({
    variables: {
      id: `${attractionId}`,
    },
  });
  const { attraction } = data || {};
  const bucketPath = attraction
    ? `site/attractions/600/${attraction.city_url_slug}/${attraction.id}`
    : false;
  useEffect(() => {
    if (bucketPath) {
      firebaseGetImages(bucketPath).then(imgs => {
        setImages(imgs);
      });
    }
  }, [attraction?.id]);
  let featuredImage = false;
  let backdropImage = false;
  if (images && images.length) {
    featuredImage = images[0];
    backdropImage = images[1] ? images[1] : featuredImage;
  }

  return (
    <AnimatedLayout>
      {!attraction && <LoadingState />}
      {!!attraction && (
        <main className="main-layout-container">
          <div className="city-details-page pb-6">
            <div
              className="backdrop-bg"
              style={{
                backgroundImage: `url('${backdropImage}')`,
              }}
            />
            <div className="container-fluid px-5">
              <div className="row mx-n4">
                <div className="col-lg-4 col-md-3 pt-3 px-4">
                  <div className="pt-4">
                    <div className="white-card-elevated poster p-2 p-md-2 p-lg-3 ">
                      <div
                        className="city-poster-image bg-cover-img rounded-lg"
                        style={{ backgroundImage: `url('${featuredImage}')` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-9 px-4">
                  <div
                    className={`over_the_backdrop pt-5 ${
                      false ? 'text-light' : 'text-dark'
                    }`}
                    style={{ height: 330 }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h1 className="text-body">{attraction?.name}</h1>
                    </div>
                  </div>
                  <nav className="hero-navigation mb-5">
                    <ul className="d-flex">
                      <li className="selected mr-3">
                        <a className="text-dark">Инфо</a>
                      </li>
                      <li className=" mr-3">
                        <a className="text-dark">Забележителности</a>
                      </li>
                      <li className=" mr-3">
                        <a className="text-dark">Билети</a>
                      </li>
                      <li className=" mr-3">
                        <a className="text-dark">Пътеписи</a>
                      </li>
                      <li className=" mr-3">
                        <a className="text-dark">Снимки</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </AnimatedLayout>
  );
}
export default withApollo(AttractionDetail);
