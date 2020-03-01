import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../../components/Layout/Layout';
import withApollo from '../../../apollo/with-apollo';
import { useCityQuery } from '../../../apollo/queries/cities.graphql';

function CityDetails(): ReactElement {
  const router = useRouter();
  const citySlug = router.query.id;

  const { data, loading } = useCityQuery({
    variables: {
      url_slug: `${citySlug}`,
    },
  });

  if (!data || !!loading) {
    return <LoadingState />;
  }
  const { city } = data;
  console.log('%c DATA', 'background-color:orange; color: white;', {
    data,
    loading,
    city,
  });
  return (
    <Layout>
      <main className="main-layout-container">
        <div className="movie-details-page pb-6">
          <div
            className="backdrop-bg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80')`,
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 pt-3">
                <div className="pt-4">
                  <div className="white-card-elevated poster p-2 p-md-2 p-lg-3 ">
                    <img
                      src="https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="img-fluid w-100 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div
                  className={`over_the_backdrop pt-5 ${
                    false ? 'text-light' : 'text-dark'
                  }`}
                  style={{ height: 360 }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h1>{city?.name}</h1>
                  </div>
                  <p className="h5 text-white-50 pb-3">24 Април 2020</p>
                  <div className="mb-2" style={{ width: '200px' }}>
                    <div className="hot-meter bg-secondary">
                      <span style={{ width: `70%` }} />
                    </div>
                  </div>

                  <div className="row pt-4">
                    <div className="col mb-3">
                      <h5 className="text-white-80 text-truncate">
                        <i className="far fa-star mr-2" />
                        Оценка
                      </h5>
                      <p className="h2">25/354</p>
                    </div>
                    <div className="col mb-3">
                      <h5 className="text-white-80 text-truncate">
                        <i className="far fa-clock mr-2" />
                        Продължителност
                      </h5>
                      <p className="h2">2 часа</p>
                    </div>
                    <div className="col mb-3">
                      <h5 className="text-white-80 text-truncate">
                        <i className="fas fa-dollar-sign mr-2" />
                        Бюджет
                      </h5>
                      <p className="h2">1278371</p>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <h4>Описание</h4>
                  <p className="lead">{city?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
function LoadingState(): ReactElement {
  return (
    <Layout>
      <div className="movie-details-page pb-6">
        <div className="backdrop-bg" />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 pt-3">
              <div className="pt-4">
                <div className="white-card-elevated poster p-2 p-md-2 p-lg-3 ">
                  <div className="bg-cover-img" style={{ height: '500px' }} />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-9">
              <div
                className="over_the_backdrop pt-5 text-light"
                style={{ height: 330 }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h1>-</h1>
                </div>
                <p className="h5 text-white-50 pb-3">-</p>
                <div className="mb-2" style={{ width: '200px' }}>
                  <div className="hot-meter">
                    <span style={{ width: '0%' }} />
                  </div>
                </div>

                <div className="row pt-4">
                  <div className="col mb-3">
                    <h5 className="text-white-80 text-truncate">
                      <i className="far fa-star mr-2" />
                      Оценка
                    </h5>
                    <p className="h2">-</p>
                  </div>
                  <div className="col mb-3">
                    <h5 className="text-white-80 text-truncate">
                      <i className="far fa-clock mr-2" />
                      Продължителност
                    </h5>
                    <p className="h2">-</p>
                  </div>
                  <div className="col mb-3">
                    <h5 className="text-white-80 text-truncate">
                      <i className="fas fa-dollar-sign mr-2" />
                      Бюджет
                    </h5>
                    <p className="h2">-</p>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h4>Описание</h4>
                <p className="lead">-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withApollo(CityDetails);
