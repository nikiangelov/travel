import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import useI18n from '../../hooks/useI18n';
import { useRouter } from 'next/router';
import { useUserQuery } from '../../graphql/queries/user.graphql';
import PageSection from '../../components/Layout/PageSection';
import UserPhotosGrid from '../../components/Profile/UserPhotosGrid';
import TravelLogHorizontalList from '../../components/TravelLogs/TravelLogHorizontalList';
import { Travellog } from '../../apollo/state/queries/user.graphql';

const SettingsPage: React.FunctionComponent = () => {
  const i18n = useI18n();
  const router = useRouter();
  const { uid } = router.query;
  const userId = uid ? uid.toString() : '';

  const { data: queryData, loading: isLoading } = useUserQuery({
    variables: {
      id: userId,
    },
  });

  if (!queryData || isLoading) {
    return <AnimatedLayout>Loading...</AnimatedLayout>;
  }

  const { user, travellogsByAuthor } = queryData;
  console.log(travellogsByAuthor);

  return (
    <AnimatedLayout>
      <main>
        <div className="container-fluid mx-n4">
          <div className="row">
            <div className="col-lg-3 px-4">
              <div className="aside-user-box white-card-elevated p-4 mb-4 sticky-top">
                <div
                  className="aside-user-box-avatar mt-n6 mb-2 bg-cover-img"
                  style={{
                    backgroundImage: `url(${user?.avatar})`,
                  }}
                ></div>
                <h3 className="text-center">
                  <small>{user?.firstName}</small>
                  <span className="d-block font-weight-bolder">
                    {user?.lastName}
                  </span>
                </h3>
                <p className="text-black-50 text-center">{user?.email}</p>
                <hr />
                <nav className="nav flex-column nav-pills mt-4">
                  <span className="link nav-link">
                    <i className="far fa-compass mr-2"></i>
                    Посетени места
                  </span>
                  <span className="link nav-link">
                    <i className="far fa-images mr-2"></i>
                    Добавени снимки
                  </span>
                  <span className="link nav-link">
                    <i className="fas fa-feather mr-2"></i>
                    Пътеписи
                  </span>
                </nav>
              </div>
            </div>
            <div className="col-lg-9 px-4">
              <div>
                {!!travellogsByAuthor && !!travellogsByAuthor.length && (
                  <PageSection title={i18n.t('pages.profile.my-travel-logs')}>
                    <TravelLogHorizontalList
                      data={Object.values(travellogsByAuthor) as Travellog[]}
                    />
                  </PageSection>
                )}
              </div>
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
              <div>
                <PageSection
                  title={i18n.t('pages.profile.travel-photos')}
                  titleRightComponent={(): React.ReactElement => (
                    <button className="btn btn-sm btn-light">
                      Разгледай всички
                    </button>
                  )}
                >
                  <UserPhotosGrid path="/site/uploads/users/nikiangelov" />
                </PageSection>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
};

export default withApollo(SettingsPage, {
  protectedRoute: true,
});
