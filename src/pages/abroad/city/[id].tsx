import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout/Layout';
import withApollo from '../../../apollo/with-apollo';
import { useCityQuery } from '../../../apollo/queries/cities.graphql';
import LoadingState from '../../../components/LoadingStates/CityDetails';
import numeral from 'numeral';
import ReadMoreReact from 'read-more-react';
import AttractionsListItem from '../../../components/Attractions/AttractionsListItem';

const scrollToRef = (ref: any): void =>
  window.scrollTo(0, ref.current.offsetTop);
function CityDetails(): ReactElement {
  const router = useRouter();
  const citySlug = router.query.id;
  const attrationsRef = React.createRef<HTMLDivElement>();

  const { data } = useCityQuery({
    variables: {
      url_slug: `${citySlug}`,
    },
  });
  const { city, attractions } = data || {};

  return (
    <Layout>
      {!city && <LoadingState />}
      {!!city && (
        <main className="main-layout-container">
          <div className="movie-details-page pb-6">
            <div
              className="backdrop-bg"
              style={{
                backgroundImage: `url('/${city?.backdrop_image}')`,
              }}
            />
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-lg-4 col-md-3 pt-3">
                  <div className="pt-4">
                    <div className="white-card-elevated poster p-2 p-md-2 p-lg-3 ">
                      <img
                        src={`/${city?.featured_image_vertical}`}
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
                    style={{ height: 330 }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h1 className="text-body">{city?.name}</h1>
                    </div>
                    {!!city.sub_name && (
                      <p className="h5 text-white-50 pb-3">{city.sub_name}</p>
                    )}
                    <div className="row pt-4">
                      {!!city.population && (
                        <div className="col mb-3">
                          <h5 className="text-white-80 text-truncate">
                            <i className="fas fa-users mr-2" />
                            Население
                          </h5>
                          <p className="h2">
                            {numeral(city.population.total)
                              .format('0,00')
                              .replace(/,/g, ' ')}
                          </p>
                        </div>
                      )}
                      <div className="col mb-3">
                        <h5 className="text-white-80 text-truncate">
                          <i className="far fa-money-bill-alt mr-2" />
                          Пътувай за около
                        </h5>
                        <p className="h2">500лв</p>
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
                  <nav className="hero-navigation mb-5">
                    <ul className="d-flex">
                      <li className="selected mr-3">
                        <a className="text-dark">Инфо</a>
                      </li>
                      <li className=" mr-3">
                        <a
                          onClick={(): void => {
                            scrollToRef(attrationsRef);
                          }}
                          className="text-dark"
                        >
                          Забележителности
                        </a>
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
                  {!!city.description && (
                    <div className="mb-5">
                      <h4>Информация</h4>
                      <div className="lead react-read-more-text">
                        <ReadMoreReact
                          text={city.description}
                          min={150}
                          ideal={200}
                          max={250}
                          readMoreText="Прочети повече"
                        />
                      </div>
                    </div>
                  )}
                  <div ref={attrationsRef}>
                    <h4>Забележителности</h4>
                  </div>
                  {!!attractions && !!attractions.length && (
                    <div className="row">
                      {attractions.map((item: any) => (
                        <div key={item.id} className="col-lg-4 col-md-6 mb-5">
                          <AttractionsListItem data={item} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </Layout>
  );
}
export default withApollo(CityDetails);
