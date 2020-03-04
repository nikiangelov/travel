import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import Link from 'next/link';
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
      <main className="main-layout-container">
        <div className="row justify-content-between">
          <div className="col-lg-9 pr-5">
            <section className="mb-4">
              <h1 className="mb-3">Съботна разходка край Пловдив</h1>
              <p className="text-muted mb-4">
                {`Еднодневна разходка до водопад Устина, екопътека "По пътя на
                героите" и "Червената църква" - Перущица`}
              </p>
              <img
                className="img-fluid w-100 mb-4 "
                src="https://images.unsplash.com/photo-1528826542659-27db5adea13c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section className="mb-4">
              <h2>Начало</h2>
              <p className="text-muted">
                <img
                  className="float-right ml-5"
                  width={350}
                  src="https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur a, neque asperiores porro quasi quia earum ipsa
                  sit, sed alias assumenda, repudiandae maiores labore
                  perferendis ullam molestiae odit harum natus?
                </span>
                <br />
                <br />
                <span>
                  Quibusdam sint dolores eaque pariatur. Similique reiciendis,
                  impedit aperiam eligendi quia ullam doloremque atque sunt
                  tenetur at non molestiae facere aliquid nulla dolor quidem,
                  recusandae, cupiditate harum? Ex, quasi asperiores.
                </span>
                <span>
                  Ipsa neque nihil sit autem ratione esse obcaecati. Quaerat,
                  exercitationem at! Suscipit necessitatibus quos corrupti
                  dolorem blanditiis, atque consequuntur dolorum adipisci,
                  doloremque cupiditate nihil, amet aliquam dolores nisi. Optio,
                  veniam.
                </span>
                <br />
                <br />
                <span>
                  Consectetur debitis odit ducimus consequuntur sequi alias,
                  voluptates at necessitatibus quos. Omnis in pariatur accusamus
                  libero debitis, voluptatibus modi, doloribus, tenetur corrupti
                  voluptatem neque maxime aliquid repellendus dolores esse ex?
                </span>
                <span>
                  Blanditiis sit dolorum modi ab! Voluptatibus magni repellat
                  nobis fugit ullam pariatur repudiandae, asperiores quis id
                  blanditiis quidem animi officiis tenetur delectus natus vero
                  incidunt quas! Nesciunt recusandae totam culpa.
                </span>
              </p>
            </section>
            <section className="mb-4">
              <h2>Пристигане в село Устина</h2>
              <p className="text-muted">
                <img
                  className="float-left mr-5"
                  width={350}
                  src="https://images.unsplash.com/photo-1528826542659-27db5adea13c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                labore culpa aperiam ipsam incidunt amet unde. Inventore
                repudiandae eius et quae nesciunt laudantium nulla voluptates
                enim, accusantium id harum veritatis! Sapiente quam quos rem
                voluptas! Ad, at. Ut dolorum similique doloremque hic rerum unde
                rem perspiciatis fugiat sit velit, temporibus non sed quibusdam
                consequuntur deserunt magni laborum eum? Voluptates, assumenda.
                Minima dicta est vel dolores suscipit praesentium nemo
                laudantium, tempore voluptates, repellat delectus? Incidunt unde
                obcaecati laboriosam blanditiis atque quae rerum voluptas, quis
                at nemo voluptate ipsa, natus esse cum? Beatae omnis
                voluptatibus iste accusamus enim, reprehenderit nesciunt quaerat
                facere natus mollitia quia a alias. Cupiditate officiis, vitae
                rem, maiores sunt quia quod minima possimus voluptatibus unde
                delectus dicta at. Temporibus necessitatibus nihil a repudiandae
                vitae debitis? Facere adipisci earum expedita. Corrupti ullam
                officia, incidunt praesentium ipsa natus iusto ratione odio
                eaque iste voluptate expedita quam commodi adipisci ex odit!
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
                <h6>
                  Цена <small className="text-muted">(приблизително)</small>
                </h6>
                <p className="text-muted font-weight-normal">35лв</p>
              </div>
              <hr />
              <div>
                <h6>Времетраене</h6>
                <p className="text-muted font-weight-normal">1 ден</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}
export default TravelLogDetails;
