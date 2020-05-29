import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AnimatedLayout from '../../../components/Layout/AnimatedLayout';
import withApollo from '../../../apollo/with-apollo';
import { useAttractionQuery } from '../../../graphql/queries/attractions.graphql';
import ReadMoreReact from 'read-more-react';
import LoadingState from '../../../components/LoadingStates/CityDetails';
import { firebaseGetImages } from '../../../firebase/storage';
import ImagesGrid from '../../../components/Profile/ImagesGrid';

function AttractionDetail(): ReactElement {
  const router = useRouter();
  const [images, setImages] = useState();
  const attractionId = router.query.id;
  const { data } = useAttractionQuery({
    variables: {
      id: `${attractionId}`,
    },
    fetchPolicy: 'network-only',
  });
  const { attraction } = data || {};
  const bucketPath = attraction
    ? `site/attractions/600/${attraction.city_url_slug}/${attraction.firebase_storage_path}`
    : false;
  useEffect(() => {
    if (bucketPath) {
      firebaseGetImages(bucketPath).then(imgs => {
        setImages(imgs);
      });
    }
  }, [attraction?._id]);
  let featuredImage = false;
  if (images && images.length) {
    featuredImage = images[0];
  }

  return (
    <AnimatedLayout>
      {!attraction && <LoadingState />}
      {!!attraction && (
        <main className="main-layout-container">
          <div className="city-details-page pb-6">
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
                <div className="col-lg-8 col-md-9 px-4 pt-5">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h1 className="text-body">{attraction?.name}</h1>
                  </div>
                  {!!attraction.description_short && (
                    <p className="pb-3 text-muted">
                      {attraction.description_short}
                    </p>
                  )}
                  {!!attraction.description && (
                    <div className="mb-6">
                      <h4 className="mb-3">Информация</h4>
                      <div className="lead react-read-more-text">
                        <ReadMoreReact
                          text={attraction.description}
                          min={150}
                          ideal={200}
                          max={250}
                          readMoreText="Прочети повече"
                        />
                      </div>
                    </div>
                  )}
                  {!!attraction.work_time_description && (
                    <div className="mb-6">
                      <h4 className="mb-3">Работно време</h4>
                      <div className="lead react-read-more-text">
                        {attraction.work_time_description}
                      </div>
                    </div>
                  )}
                  <div className="mb-6">
                    <h4 className="mb-3">Снимки</h4>
                    <div className="lead react-read-more-text">
                      <ImagesGrid images={images} auto />
                    </div>
                  </div>
                  <div className="mb-4" />
                  <div className="mt-6 pt-3">
                    <hr />
                    <p className="small text-muted text-center">
                      В страницата е използвана информация от следните
                      източници.
                      <br />
                      Информацията може да е била променена и/или преведена на
                      български, за разлика от тази в основния източник.
                      <br />
                      <br />
                      <a
                        href={`${attraction.wikipedia_article_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia
                      </a>
                    </p>
                  </div>
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
