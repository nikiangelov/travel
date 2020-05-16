import React, { ReactElement } from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import Link from 'next/link';
// import withApollo from '../../../apollo/with-apollo';
// import { useCityQuery } from '../../../graphql/queries/cities.graphql';
// import { useCountryQuery } from '../../../graphql/queries/countries.graphql';
// import numeral from 'numeral';
// import ReadMoreReact from 'read-more-react';

function TravelLogDetails(): ReactElement {
  return (
    <AnimatedLayout>
      <main className="main-layout-container">
        <div className="row justify-content-between">
          <div className="col-lg-9 pr-5">
            <section className="mb-6">
              <h1 className="mb-3">Съботна разходка край Пловдив</h1>
              <p className="text-muted mb-4">
                {`Еднодневна разходка до водопад Устина,\n екопътека "По пътя на
                героите" и "Червената църква" - Перущица`}
              </p>
              <nav className="hero-navigation mb-5 d-none d-lg-block">
                <ul className="d-flex">
                  <li className="selected mr-3">
                    <a className="text-dark">Пътепис</a>
                  </li>
                  <li className="mr-3">
                    <a className="text-muted">Карта на местата</a>
                  </li>
                  <li className="mr-3">
                    <a className="text-muted">План</a>
                  </li>
                  <li className="mr-3">
                    <a className="text-muted">Коментари</a>
                  </li>
                </ul>
              </nav>
              <ul className="nav d-none nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Пътепис
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Карта на местата
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    План
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              {/* <img
                className="img-fluid w-100 mb-4 "
                src="https://images.unsplash.com/photo-1528826542659-27db5adea13c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              /> */}
            </section>
            <section className="mb-5">
              <h2 className="mb-3">Язовир "Въча"</h2>
              <p className="text-muted">
                <figure className="figure float-right ml-5">
                  <img
                    width={350}
                    src="https://images.unsplash.com/photo-1497668319663-af2fa49df87e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">
                    Страхотната гледа към язовира.
                  </figcaption>
                </figure>
                Шофирането покрай язовира е истинско удоволствие, защото пътят
                се вие по цялото протежение на водоема и разкрива чудесни
                гледки. Първо спираме на язовирната стена и ахваме –
                съоръжението е толкова огромно, че изначално си смаян, после се
                чудиш как е построено, за да обуздае цялото количество вода, а
                накрая се чувстваш много, много малък. Продължавайки по пътя
                гледките следват една след друга – язовирът е красив по всяко
                време на годината. За съжаление почти няма удобни отбивки за
                паркиране, така че за планираните фотопаузи се налага да
                повървим пеш по пътя. За почивка и кафе задължително спираме на
                хотел "Чилингира", откъдето се разкрива най-хубавата панорамна
                гледка към язовира с множеството плаващи в него дървени къщички.
                <span className="clearfix" />
              </p>
            </section>
            <section className="mb-5">
              <h2 className="mb-3">Буйновско ждрело</h2>
              <p className="text-muted">
                <figure className="figure float-right ml-5">
                  <img
                    width={350}
                    src="https://images.unsplash.com/photo-1528826542659-27db5adea13c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">
                    Страхотна гледа
                  </figcaption>
                </figure>
                Пътуването до с. Ягодина си е предизвикателство – озоваваме се
                на еднолентов път, който изисква бавна скорост и повишено
                внимание, погледите ни обаче са привлечени от високите отвесни
                скали от двете ни страни. На места скалите надвисват над пътя
                като естествен тунел и тайничко се молим да не ни затрупат.
                Невъобразима е мисълта колко време е било необходимо на водната
                стихия да образува този уникален феномен. Природата наистина е
                най-добрият творец и респектира с творенията си.
                <span className="clearfix" />
              </p>
              <div className="alert alert-info" role="alert">
                <h6 className="alert-heading">Съвет:</h6>
                <p className="mb-0">
                  Носете си топла дреха, защото температурата в пещерата е 6
                  градуса.
                </p>
              </div>
            </section>
            <section className="mb-5">
              <h2 className="mb-3">Ягодинска пещера</h2>
              <p className="text-muted">
                <img
                  className="float-left mr-5"
                  width={350}
                  src="https://images.unsplash.com/photo-1497668319663-af2fa49df87e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                До пещерата се стига лесно и е добре благоустроена – от дясната
                страна на пътя има удобен паркинг, осветена е, върви се по
                специално изградени пътеки, а водачът представя интересна
                беседа. Пещерата е наистина красива – за първи път виждам такова
                разнообразие на скални образувания, измежду които множество
                драперии, цели стени с "леопардова кожа" и пещерни бисери.
                Особено развълнувана бях от близката ни среща с няколко прилепа,
                които спяха невъзмутимо, очевидно привикнали със светлината от
                прожекторите и тълпите от хора. Снимането в пещерата е
                забранено, затова пък си направихме фотопауза на римския мост
                над Буйновска река, който се намира близо до входа на пещерата.
                <span className="clearfix" />
              </p>
            </section>
          </div>
          <div className="col-lg-3">
            <div className="white-card-elevated py-3 px-4 elevation-2 mb-4">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Автор</h5>
                <div>
                  <button type="button" className="btn btn-sm btn-outline-info">
                    Последвай
                  </button>
                </div>
              </div>
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
            </div>
            <div className="white-card-elevated py-3 px-4 mb-4 elevation-2 sticky-top">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Данни за пътешествието</h5>
              </div>
              <div>
                <h6 className="mb-1">
                  Цена: <small className="text-muted">(приблизително)</small>
                </h6>
                <p className="text-muted font-weight-normal">35лв</p>
              </div>
              <hr />
              <div>
                <h6 className="mb-1">Времетраене:</h6>
                <p className="text-muted font-weight-normal">1 ден</p>
              </div>
              <hr />
              <div>
                <h6 className="mb-2">Подходящо за сезон:</h6>
                <div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-2"
                  >
                    Пролет
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary mr-2"
                  >
                    Лято
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}
export default TravelLogDetails;
