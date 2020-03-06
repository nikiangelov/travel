import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import AnimatedLayout from '../../../components/Layout/AnimatedLayout';
import withApollo from '../../../apollo/with-apollo';
import { useCityQuery } from '../../../apollo/queries/cities.graphql';
import { useCountryQuery } from '../../../apollo/queries/countries.graphql';
import LoadingState from '../../../components/LoadingStates/CityDetails';
import numeral from 'numeral';
import ReadMoreReact from 'read-more-react';
import AttractionsListItem from '../../../components/Attractions/AttractionsListItem';
import { calculateLocalTime } from '../../../utils/dates';

const scrollToRef = (ref: any): void =>
  window.scrollTo(0, ref.current.offsetTop);
function CityDetails(): ReactElement {
  const router = useRouter();
  const citySlug = router.query.id;
  const attrationsRef = React.createRef<HTMLDivElement>();
  const climateRef = React.createRef<HTMLDivElement>();

  const { data } = useCityQuery({
    variables: {
      url_slug: `${citySlug}`,
      attractions_limit: 6,
    },
  });
  const { city, attractions } = data || {};
  const { data: countryData } = useCountryQuery({
    variables: {
      code: city?.country_code,
    },
  });

  return (
    <AnimatedLayout>
      {!city && <LoadingState />}
      {!!city && (
        <main className="main-layout-container">
          <div className="city-details-page pb-6">
            <div
              className="backdrop-bg"
              style={{
                backgroundImage: `url('/${city?.backdrop_image}')`,
              }}
            />
            <div className="container-fluid px-5">
              <div className="row mx-n4">
                <div className="col-lg-4 col-md-3 pt-3 px-4">
                  <div className="pt-4">
                    <div className="white-card-elevated poster p-2 p-md-2 p-lg-3 ">
                      <div
                        className="city-poster-image bg-cover-img rounded-lg"
                        style={{
                          backgroundImage: `url('/${city?.featured_image_vertical}')`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-none d-lg-block mt-6">
                    <h5 className="mb-3 px-2">
                      Допълнителна информация{' '}
                      <span className="d-block h6 text-muted mt-2">
                        {countryData?.country?.name}
                      </span>
                    </h5>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item px-2  pr-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-2">Стандарт на живот</h6>
                        </div>
                        <div>
                          <div className="hot-meter-wrap d-flex justify-content-between align-items-center">
                            <div className="hot-meter">
                              <span
                                style={{
                                  width: `${countryData?.country?.qol?.total}%`,
                                }}
                              />
                            </div>
                            <small className="rating-text text-black-50">
                              {`${countryData?.country?.qol?.total}% / 100%`}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item px-2  pr-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-2">Сигурност</h6>
                        </div>
                        <div>
                          <div className="hot-meter-wrap d-flex justify-content-between align-items-center">
                            <div className="hot-meter">
                              <span
                                style={{
                                  width: `${countryData?.country?.qol?.safety}%`,
                                }}
                              />
                            </div>
                            <small className="rating-text text-black-50">
                              {`${countryData?.country?.qol?.safety}% / 100%`}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item px-2  pr-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-2">Здравеопазване</h6>
                        </div>
                        <div>
                          <div className="hot-meter-wrap d-flex justify-content-between align-items-center">
                            <div className="hot-meter">
                              <span
                                style={{
                                  width: `${countryData?.country?.qol?.healt_care}%`,
                                }}
                              />
                            </div>
                            <small className="rating-text text-black-50">
                              {`${countryData?.country?.qol?.healt_care}% / 100%`}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item px-2  pr-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-2">Замърсяване</h6>
                        </div>
                        <div>
                          <div className="hot-meter-wrap d-flex justify-content-between align-items-center">
                            <div className="hot-meter">
                              <span
                                style={{
                                  width: `${countryData?.country?.qol?.pollution}%`,
                                }}
                              />
                            </div>
                            <small className="rating-text text-black-50">
                              {`${countryData?.country?.qol?.pollution}% / 100%`}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item px-2  pr-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-2">Климат</h6>
                        </div>
                        <div>
                          <div className="hot-meter-wrap d-flex justify-content-between align-items-center">
                            <div className="hot-meter">
                              <span
                                style={{
                                  width: `${countryData?.country?.qol?.climate}%`,
                                }}
                              />
                            </div>
                            <small className="rating-text text-black-50">
                              {`${countryData?.country?.qol?.climate}% / 100%`}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item px-2  pr-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-2">
                            Случаи на корона вирус (covid-19)
                          </h6>
                        </div>
                        <div className="d-flex">
                          <p>
                            {countryData?.country?.covid?.cases} бр. &middot;
                            нови {countryData?.country?.covid?.cases_new} бр.
                          </p>
                          <p className="ml-auto">
                            <small className="rating-text text-black-50">
                              {countryData?.country?.covid?.last_update}
                            </small>
                          </p>
                        </div>
                      </div>
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
                          <i className="far fa-clock mr-2" />
                          Местно време
                        </h5>
                        <p className="h2">
                          {calculateLocalTime(city.utc_offset)}
                          <small>ч.</small>
                        </p>
                      </div>
                      <div className="col mb-3">
                        <h5 className="text-white-80 text-truncate">
                          <i className="fas fa-cloud-sun mr-2" />
                          Температура
                        </h5>
                        <p className="h2">{city.temperature}&deg;C</p>
                      </div>
                    </div>
                  </div>
                  <nav className="hero-navigation mb-5 d-none d-lg-block">
                    <ul className="d-flex">
                      <li className="selected mr-3">
                        <a className="text-dark">Инфо</a>
                      </li>
                      <li className="mr-3">
                        <a
                          onClick={(): void => {
                            scrollToRef(climateRef);
                          }}
                          className="text-dark"
                        >
                          Климат
                        </a>
                      </li>
                      <li className=" mr-3">
                        <a className="text-dark">Пътеписи</a>
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
                    </ul>
                  </nav>
                  {!!city.description && (
                    <div className="mb-5">
                      <h4 className="mb-3">Информация</h4>
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
                  {!!attractions && !!attractions.length && (
                    <div ref={attrationsRef} className="mb-5">
                      <h4 className="mb-4">Топ забележителности</h4>
                      <div className="row">
                        {attractions.map((item: any) => (
                          <div key={item.id} className="col-lg-4 col-md-6 mb-5">
                            <AttractionsListItem data={item} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {!!city.climate_description && (
                    <div ref={climateRef} className="mb-5">
                      <h4 className="mb-3">Климат</h4>
                      <div className="lead react-read-more-text">
                        {city.climate_description}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </AnimatedLayout>
  );
}
export default withApollo(CityDetails);
