import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import AnimatedLayout from '../../../components/Layout/AnimatedLayout';
import Link from 'next/link';
import travelLogPlacesData from '../../../constants/travellog';
const MarkersMap = dynamic(
  () => import('../../../components/Maps/MarkersMap'),
  { loading: () => <p>...</p>, ssr: false },
);
// import withApollo from '../../../apollo/with-apollo';
// import { useCityQuery } from '../../../apollo/queries/cities.graphql';
// import { useCountryQuery } from '../../../apollo/queries/countries.graphql';
// import numeral from 'numeral';
// import ReadMoreReact from 'read-more-react';

function TravelLogDetails(): ReactElement {
  const router = useRouter();
  const travelLogId = router.query.id;
  console.log(
    '%ctravelLogId',
    'background-color:green; color: white;',
    travelLogId,
  );

  return (
    <AnimatedLayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css"
        />
      </Head>
      <main className="main-layout-container">
        <div className="row justify-content-between">
          <div className="col-lg-9 pr-5">
            <section className="mb-5">
              <div className="">
                <div className="d-flex justify-content-between">
                  <h1 className="mb-3">Съботна разходка край Пловдив</h1>
                  <div className="align-self-center">
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="far fa-bookmark mr-2" />
                      Запази
                    </button>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Еднодневна разходка до водопад Устина, екопътека &quot;По пътя
                  на героите&quot; и &quot;Червената църква&quot; - Перущица
                </p>
              </div>
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
              {/* <img
                className="img-fluid w-100 mb-4 "
                src="https://images.unsplash.com/photo-1528826542659-27db5adea13c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              /> */}
            </section>
            <section className="mb-5">
              <MarkersMap markers={travelLogPlacesData.places} />
            </section>
            <section className="mb-5">
              <h2 className="mb-3">{`Язовир "Въча"`}</h2>
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
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                illum impedit culpa aliquid ea ratione exercitationem
                consequuntur. Totam veritatis impedit ex qui voluptas sed
                voluptate, nobis laboriosam minima laborum sequi! Praesentium
                illum voluptatum ipsam aperiam, sit esse eius, ad vitae sed
                corrupti cum rem facere aspernatur impedit exercitationem
                commodi? Ullam neque soluta cum doloremque expedita voluptates
                perferendis cupiditate placeat unde. Architecto dolorum
                reiciendis iste quos exercitationem esse perspiciatis est dolore
                repudiandae doloribus voluptas ipsa, earum quae, nisi asperiores
                ipsam molestiae nam consequuntur culpa velit expedita libero
                eius! Praesentium, esse dolor? Expedita delectus harum ad
                dolorem eius quasi, pariatur aliquam amet perspiciatis, soluta,
                fugit maxime unde laudantium aut eveniet saepe fuga iste
                excepturi mollitia animi voluptatem rerum! Reiciendis assumenda
                quaerat natus? Repellat cupiditate temporibus amet facilis
                molestiae assumenda laborum alias, ducimus reprehenderit. Nulla
                nam et dolore qui, ex fugiat recusandae assumenda ducimus
                asperiores obcaecati suscipit rem eos reprehenderit temporibus,
                vitae voluptate.
                <span className="clearfix" />
              </p>
            </section>
            <section className="mb-5">
              <h2 className="mb-3">Буйновско ждрело</h2>
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
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus beatae cumque nobis exercitationem. Beatae quisquam
                alias ipsum totam mollitia quas consequuntur ab eveniet
                provident? Cum, earum placeat. Tempore, modi fuga. A labore in
                distinctio! Beatae, debitis numquam ab nemo vero totam.
                Adipisci, earum. Qui quas iusto pariatur ullam aliquid.
                Consequuntur eum quia maiores repellendus, enim inventore
                deserunt quidem repellat mollitia. Mollitia animi tempore et
                asperiores deleniti corporis quis architecto, fugit
                necessitatibus! Quod soluta facilis tenetur unde debitis at
                fugit pariatur autem ut consectetur! Nam vitae necessitatibus
                enim cum velit aut.
                <span className="clearfix" />
              </p>
              <div className="alert alert-info" role="alert">
                <h6 className="alert-heading">Съвет:</h6>
                <p className="mb-0">Носете си топли дрехи.</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                molestiae temporibus ducimus sunt minus? Aut provident,
                molestiae quidem dicta ipsa rerum aliquid ad earum, consequuntur
                atque dolore. Facilis, quia veritatis? Molestias possimus fugiat
                dolorum dicta dignissimos nobis voluptatibus ut excepturi,
                vitae, eos consectetur beatae? Illo voluptatem repudiandae
                architecto obcaecati ea exercitationem minima odio expedita, eum
                similique recusandae at. Similique, fugit! Expedita eligendi a
                mollitia. Quidem pariatur minima odio harum sapiente quis nisi
                sit necessitatibus optio sequi dicta placeat amet aspernatur, in
                quibusdam, recusandae consectetur voluptas corrupti vel beatae
                modi autem! Reprehenderit, beatae voluptatum nobis tempore
                provident esse ullam optio. Quos, voluptatem. Labore quidem
                maiores esse officia quas aperiam delectus nesciunt dolores
                magni hic, earum nihil accusantium, in cupiditate? Molestiae,
                necessitatibus! Voluptas nihil eaque ipsum libero ab quod et,
                hic adipisci commodi facilis quidem optio eveniet pariatur,
                maxime dignissimos molestias mollitia! Ratione, numquam nobis
                soluta ea quas aut ipsum dolor totam.
                <span className="clearfix" />
              </p>
            </section>
          </div>
          <div className="col-lg-3">
            <div className="white-card-elevated py-3 px-4 elevation-2 mb-4">
              <div className="d-flex justify-content-between">
                <h5 className="mb-3">Автор</h5>
                <div className="d-none">
                  <button type="button" className="btn btn-sm btn-outline-info">
                    <i className="fas fa-user-plus mr-2" />
                    Последвай
                  </button>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="https://nikiangelov.com/imgs/profile256.jpg"
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
                      <a className="text-dark">Ники Ангелов</a>
                    </Link>
                  </h6>
                  <p className="small p-0 mb-2 text-muted">
                    18 държави &middot; 5 пътеписа
                  </p>
                </div>
              </div>
              <p className="small text-muted m-0">
                Добавено на: 04 Март 2020г.
              </p>
            </div>
            <div className="white-card-elevated py-3 px-4 mb-4 elevation-2">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Данни за пътешествието</h5>
              </div>
              <div>
                <h6 className="mb-1">
                  Цена: <small className="text-muted">(приблизително)</small>
                </h6>
                <p className="text-muted font-weight-normal mb-0">
                  22лв - гориво&nbsp;&middot;&nbsp;35лв - обяд
                </p>
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
            <div className="white-card-elevated py-3 px-4 mb-4 elevation-2 sticky-top">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Включени обекти</h5>
              </div>
              <div className="aside-attraction-list">
                {travelLogPlacesData.places.map(place => (
                  <div
                    key={`tp${place.id}`}
                    className="aside-attraction-item mb-4"
                  >
                    <div className="row no-gutters">
                      <div className="col-3">
                        <span
                          className="bg-cover-img rounded image mr-3"
                          style={{ backgroundImage: `url(${place.imageUrl})` }}
                        />
                      </div>
                      <div className="col-9 d-flex">
                        <div className="flex-fill">
                          <h6 className="mb-1">{place.title}</h6>
                          <p className="small text-muted mb-0">
                            {place.location}
                          </p>
                        </div>
                        <h6 className="text-primary mb-0 ml-2">{place.id}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn flex-fill text-dark btn-light mt-2 ">
                  <i className="fas fa-map-marker-alt mr-2" />
                  Виж върху картата
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}
export default TravelLogDetails;
