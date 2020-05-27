import React, { ReactElement } from 'react';

import Link from 'next/link';
import AnimatedLayout from '../components/Layout/AnimatedLayout';
import { NextPage } from 'next';

import strings from '../constants/strings';

import PageSection from '../components/Layout/PageSection';
import PopularDestinationsGrid from '../components/PopularDestinationsGrid';
import PopularTravelLogsList from '../components/TravelLogs/PopularTravelLogsList';
import withApollo from '../apollo/with-apollo';

class IndexPage extends React.Component<NextPage> {
  render(): ReactElement {
    return (
      <AnimatedLayout>
        <div className="row">
          <div className="col">
            <PageSection title={strings.popularDestinationsAbroad}>
              <PopularDestinationsGrid />
            </PageSection>
            <PageSection
              title={strings.travelIdeasBulgaria}
              titleRightComponent={(): ReactElement => (
                <button className="btn btn-sm btn-light mb-2">
                  Виж всички
                </button>
              )}
            >
              <PopularTravelLogsList />
            </PageSection>
          </div>
          <aside className="col-lg-3">
            <div className="d-none d-lg-block index-intro-box white-card-elevated text-muted small elevation-5 pt-3 px-4 mb-5">
              <h6>Добре дошъл!</h6>
              <p>
                <b>Travl.bg</b> е сайт за пътешественици. Вдъхнови се за
                следващото си пътуване като разгледаш нашия каталог от градове и
                забележителности.
              </p>
            </div>
            <div className="white-card-elevated py-3 px-4 elevation-5 mb-5">
              <h5 className="mb-4">Топ пътешественици</h5>
              <div className="d-flex mb-3">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="/images/avatars/profile256.jpg"
                        alt=""
                        className="rounded-circle"
                        width="50px"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex-fill border border-top-0 border-left-0 border-right-0">
                  <h6 className="mb-1">
                    <Link href="/profile">
                      <a className="text-dark">
                        Ники Ангелов{' '}
                        <b className="float-right text-primary d-none">1</b>
                      </a>
                    </Link>
                  </h6>
                  <p className="small p-0 mb-2 text-muted">
                    18 държави &middot; 5 пътеписа
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="/images/avatars/user-profile-female-unsplash.jpg"
                        alt=""
                        className="rounded-circle"
                        width="50px"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex-fill border border-top-0 border-left-0 border-right-0">
                  <h6 className="mb-1">
                    <Link href="/profile">
                      <a className="text-dark">
                        Ивана Боянова{' '}
                        <b className="float-right text-primary d-none">1</b>
                      </a>
                    </Link>
                  </h6>
                  <p className="small p-0 mb-2 text-muted">
                    12 държави &middot; 243 пътеписа
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="/images/avatars/user-profile-male-unsplash.jpg"
                        alt=""
                        className="rounded-circle"
                        width="50px"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">
                    <Link href="/profile">
                      <a className="text-dark">
                        Петко Атанасов{' '}
                        <b className="float-right text-primary d-none">1</b>
                      </a>
                    </Link>
                  </h6>
                  <p className="small p-0 mb-2 text-muted">
                    8 държави &middot; 3 пътеписа
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </AnimatedLayout>
    );
  }
}

export default withApollo(IndexPage);
