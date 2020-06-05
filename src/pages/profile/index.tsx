import React, { ReactElement } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import PageSection from '../../components/Layout/PageSection';
import UserPhotosGrid from '../../components/Profile/UserPhotosGrid';
import TravelLogHorizontalList from '../../components/TravelLogs/TravelLogHorizontalList';
import useI18n from '../../hooks/useI18n';
import withApollo from '../../apollo/with-apollo';

const VisitedPlacesMap = dynamic(
  () => import('../../components/Maps/VisitedPlacesMap'),
  { loading: () => <div className="loading-map-placeholder" />, ssr: false },
);

const ProfilePage: React.FunctionComponent = () => {
  const i18n = useI18n();
  const visitedPlacesSectionRef = React.createRef<HTMLDivElement>();
  const photosSectionRef = React.createRef<HTMLDivElement>();
  const travellogsSectionRef = React.createRef<HTMLDivElement>();

  function scrollToRef(ref: any): void {
    window.scrollTo(0, ref.current.offsetTop);
  }

  return (
    <AnimatedLayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div className="container-fluid mx-n4">
          <div className="row">
            <div className="col-lg-3 px-4">
              <div className="aside-user-box white-card-elevated p-4 mb-4 sticky-top">
                <div
                  className="aside-user-box-avatar mt-n6 mb-2 bg-cover-img"
                  style={{
                    backgroundImage: `url(/images/avatars/profile256.jpg)`,
                  }}
                ></div>
                <h3 className="text-center">
                  <small>Николай</small>
                  <span className="d-block font-weight-bolder">Ангелов</span>
                </h3>
                <p className="text-black-50 text-center">
                  info@nikiangelov.com
                </p>
                <hr />
                <nav className="nav flex-column nav-pills mt-4">
                  <span
                    onClick={(): void => {
                      scrollToRef(visitedPlacesSectionRef);
                    }}
                    className="link nav-link"
                  >
                    <i className="far fa-compass mr-2"></i>
                    Посетени места
                  </span>
                  <span
                    onClick={(): void => {
                      scrollToRef(photosSectionRef);
                    }}
                    className="link nav-link"
                  >
                    <i className="far fa-images mr-2"></i>
                    Добавени снимки
                  </span>
                  <span
                    onClick={(): void => {
                      scrollToRef(travellogsSectionRef);
                    }}
                    className="link nav-link"
                  >
                    <i className="fas fa-feather mr-2"></i>
                    Пътеписи
                  </span>
                </nav>
              </div>
            </div>
            <div className="col-lg-9 px-4">
              <PageSection title="Моята **активност**">
                <div className="row text-center">
                  <div className="col-lg-3">
                    <div className="white-card-elevated p-2 py-3 elevation-2">
                      <strong className="digits h1">64</strong>
                      <p className="">
                        посетени
                        <br />
                        държави
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="white-card-elevated p-2 py-3 elevation-2">
                      <strong className="digits h1">35%</strong>
                      <p className="">
                        от
                        <br />
                        Европа
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="white-card-elevated p-2 py-3 elevation-2">
                      <strong className="digits h1">12</strong>
                      <p className="">
                        добавени
                        <br />
                        пътеписа
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="white-card-elevated p-2 py-3 elevation-2">
                      <strong className="digits h1">5</strong>
                      <p className="">
                        добавени
                        <br />
                        снимки
                      </p>
                    </div>
                  </div>
                  <style jsx>{`
                    .digits {
                      font-family: 'Roboto Condensed', sans-serif;
                    }
                  `}</style>
                </div>
              </PageSection>
              <div ref={visitedPlacesSectionRef}>
                <VisitedPlacesMap />
              </div>
              <div ref={photosSectionRef}>
                <PageSection
                  title={i18n.t('pages.profile.travel-photos')}
                  titleRightComponent={(): ReactElement => (
                    <button className="btn btn-sm btn-light">
                      Разгледай всички
                    </button>
                  )}
                >
                  <UserPhotosGrid path="/site/uploads/users/nikiangelov" />
                </PageSection>
              </div>
              <div ref={travellogsSectionRef}>
                <PageSection title={i18n.t('pages.profile.my-travel-logs')}>
                  <TravelLogHorizontalList data={[]} />
                </PageSection>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
};

export default withApollo(ProfilePage, {
  protectedRoute: true,
});
