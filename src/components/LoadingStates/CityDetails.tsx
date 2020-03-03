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
                <div className="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CityDetails;