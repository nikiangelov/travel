import React, { ReactElement } from 'react';

function CityDetails(): ReactElement {
  return (
    <main className="main-layout-container">
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
    </main>
  );
}

export default CityDetails;
