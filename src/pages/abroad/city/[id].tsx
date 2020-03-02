import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../../components/Layout/Layout';
import withApollo from '../../../apollo/with-apollo';
import { useCityQuery } from '../../../apollo/queries/cities.graphql';
import LoadingState from '../../../components/LoadingStates/CityDetails';

function CityDetails(): ReactElement {
  const router = useRouter();
  const citySlug = router.query.id;

  const { data, loading } = useCityQuery({
    variables: {
      url_slug: `${citySlug}`,
    },
  });
  const { city } = data || {};

  return (
    <Layout>
      {!!loading && <LoadingState />}
      {!loading && (
        <main className="main-layout-container">
          <div className="movie-details-page pb-6">
            <div
              className="backdrop-bg"
              style={{
                backgroundImage: `url('/${city?.backdrop_image}')`,
              }}
            />
            <div className="container">
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
                    style={{ height: 360 }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h1>{city?.name}</h1>
                    </div>
                    <p className="h5 text-white-50 pb-3">24 Април 2020</p>
                    <div className="mb-2" style={{ width: '200px' }}>
                      <div className="hot-meter bg-secondary">
                        <span style={{ width: `70%` }} />
                      </div>
                    </div>

                    <div className="row pt-4">
                      <div className="col mb-3">
                        <h5 className="text-white-80 text-truncate">
                          <i className="far fa-star mr-2" />
                          Оценка
                        </h5>
                        <p className="h2">25/354</p>
                      </div>
                      <div className="col mb-3">
                        <h5 className="text-white-80 text-truncate">
                          <i className="far fa-clock mr-2" />
                          Продължителност
                        </h5>
                        <p className="h2">2 часа</p>
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
                  <div className="mb-5">
                    <h4>Описание</h4>
                    <p className="lead">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Pariatur quisquam unde consequuntur eligendi sed suscipit
                      ex animi earum reiciendis eaque voluptas, porro sit rerum
                      doloremque mollitia asperiores aut vero dicta! Recusandae
                      voluptatem ipsam molestiae eum illum maxime earum
                      accusantium fuga iure? Molestias debitis exercitationem
                      placeat ut ratione aliquam soluta, sequi maxime magnam
                      magni aliquid repellendus quae mollitia. Dignissimos,
                      quisquam expedita. Velit voluptas voluptatum, quod
                      molestiae in tempora porro saepe facilis excepturi harum
                      aliquam explicabo itaque consequatur sit molestias
                      laboriosam a culpa neque impedit. Velit perferendis
                      obcaecati officiis voluptas ea libero. Quidem sint vero
                      quasi minus ea numquam, excepturi reiciendis, fuga
                      tempore, culpa distinctio libero debitis autem vitae. A
                      quos iste dolore aliquid! Sint atque autem, sequi
                      assumenda magnam suscipit nihil? Deserunt aspernatur
                      consequatur dolorum nemo, corporis eligendi quam ipsa, rem
                      provident qui accusamus? Voluptate, facilis laborum
                      recusandae repudiandae suscipit impedit sunt veritatis at
                      voluptatem perferendis delectus similique dolorum, tempora
                      architecto. Nemo, consequuntur sequi magnam officia
                      praesentium quia est. Nemo corporis impedit a ut! Numquam
                      corporis molestiae officia deleniti sit! Sed repudiandae
                      ipsa sit eius at libero, illum iusto officia incidunt.
                      Debitis exercitationem, minus reiciendis iste odit
                      accusamus placeat quisquam nam quasi maiores eos veritatis
                      porro, voluptatem impedit non quibusdam error, ipsum
                      recusandae aliquid tempora quidem! Molestiae doloremque ut
                      id harum. Facere, esse. Rem deleniti accusamus aperiam
                      explicabo laboriosam ad quod dolores hic! Voluptatem modi
                      ut accusantium? Ea voluptates quam nesciunt repellendus
                      labore corrupti dignissimos quis hic quidem numquam,
                      beatae ullam. Consequuntur fugit quos expedita temporibus
                      ipsam obcaecati consectetur labore ratione explicabo
                      similique! Laudantium, obcaecati quis ab, dolores quia
                      officia, animi dolor neque illo ex in unde. Nihil ipsum
                      pariatur a! Aperiam accusantium at, tempora vero expedita
                      deleniti fugit veritatis sint voluptatem deserunt velit
                      consequuntur aliquam incidunt ipsum. Sapiente laudantium
                      cum iste, corporis quos consectetur enim quas neque, optio
                      tempora unde.
                    </p>
                  </div>
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
