import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import dynamic from 'next/dynamic';

const VisitedPlacesMap = dynamic(
  () => import('../../components/Maps/VisitedPlacesMap'),
  { loading: () => <p>...</p>, ssr: false },
);
interface Props {
  key: string;
}

function index({}: Props): ReactElement {
  return (
    <AnimatedLayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css"
        />
      </Head>
      <main>
        <div className="container-fluid mx-n4">
          <div className="row">
            <div className="col-lg-3 px-4">
              <div className="aside-user-box white-card-elevated p-4 mb-4">
                <div
                  className="aside-user-box-avatar mt-n6 mb-2 bg-cover-img"
                  style={{
                    backgroundImage:
                      'url(https://nikiangelov.com/imgs/profile256.jpg)',
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
                  <a href="home.html" className="nav-link">
                    <i className="far fa-compass mr-2"></i>
                    Моята стена
                  </a>

                  <Link href="#fragment">
                    <a className="nav-link">
                      <i className="fas fa-comment mr-2"></i>
                      Моите отзиви
                    </a>
                  </Link>
                  <a href="public_reviews.html" className="nav-link active">
                    <i className="fas fa-heart mr-2"></i>
                    Всички отзиви
                  </a>
                  <a
                    href="user_list.html#FAVORITES"
                    className="nav-link"
                    data-type="FAVORITES"
                  >
                    <i className="fas fa-heart mr-2"></i>
                    Любими
                  </a>
                  <a
                    href="user_list.html#WATCHED"
                    className="nav-link"
                    data-type="WATCHED"
                  >
                    <i className="far fa-check-circle mr-2"></i>
                    Гледани
                  </a>
                  <a
                    href="user_list.html#WATCH_LATER"
                    className="nav-link"
                    data-type="WATCH_LATER"
                  >
                    <i className="far fa-clock mr-2"></i>
                    За гледане по-късно
                  </a>
                </nav>
              </div>
            </div>
            <div className="col-lg-9 px-4">
              <VisitedPlacesMap />
              <div className="white-card-elevated p-4 mb-5">
                <p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium obcaecati porro deserunt magni deleniti mollitia
                    nobis maiores recusandae. Accusamus facere mollitia a ipsum
                    adipisci cumque quod rerum labore explicabo eaque.
                  </span>
                  <span>
                    Nisi illo et minima, laboriosam ab quos labore, perspiciatis
                    ipsa adipisci molestiae dolorem, soluta quae. Commodi
                    nostrum error tenetur quo harum, eligendi culpa minima
                    impedit temporibus provident, totam, vero ipsam?
                  </span>
                  <span>
                    Laboriosam eaque aliquid sed inventore mollitia provident
                    cum eos, maiores autem assumenda amet iure unde quae
                    doloremque ducimus recusandae dicta fugit nostrum
                    dignissimos placeat nam reiciendis adipisci quibusdam
                    deleniti. Vero!
                  </span>
                </p>
              </div>
              <div className="white-card-elevated p-4 mb-5">
                <p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium obcaecati porro deserunt magni deleniti mollitia
                    nobis maiores recusandae. Accusamus facere mollitia a ipsum
                    adipisci cumque quod rerum labore explicabo eaque.
                  </span>
                  <span>
                    Nisi illo et minima, laboriosam ab quos labore, perspiciatis
                    ipsa adipisci molestiae dolorem, soluta quae. Commodi
                    nostrum error tenetur quo harum, eligendi culpa minima
                    impedit temporibus provident, totam, vero ipsam?
                  </span>
                  <span>
                    Laboriosam eaque aliquid sed inventore mollitia provident
                    cum eos, maiores autem assumenda amet iure unde quae
                    doloremque ducimus recusandae dicta fugit nostrum
                    dignissimos placeat nam reiciendis adipisci quibusdam
                    deleniti. Vero!
                  </span>
                </p>
              </div>
              <div id="fragment" className="white-card-elevated p-4 mb-5">
                <p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium obcaecati porro deserunt magni deleniti mollitia
                    nobis maiores recusandae. Accusamus facere mollitia a ipsum
                    adipisci cumque quod rerum labore explicabo eaque.
                  </span>
                  <span>
                    Nisi illo et minima, laboriosam ab quos labore, perspiciatis
                    ipsa adipisci molestiae dolorem, soluta quae. Commodi
                    nostrum error tenetur quo harum, eligendi culpa minima
                    impedit temporibus provident, totam, vero ipsam?
                  </span>
                  <span>
                    Laboriosam eaque aliquid sed inventore mollitia provident
                    cum eos, maiores autem assumenda amet iure unde quae
                    doloremque ducimus recusandae dicta fugit nostrum
                    dignissimos placeat nam reiciendis adipisci quibusdam
                    deleniti. Vero!
                  </span>
                </p>
              </div>
              <div className="white-card-elevated p-4 mb-5">
                <p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium obcaecati porro deserunt magni deleniti mollitia
                    nobis maiores recusandae. Accusamus facere mollitia a ipsum
                    adipisci cumque quod rerum labore explicabo eaque.
                  </span>
                  <span>
                    Nisi illo et minima, laboriosam ab quos labore, perspiciatis
                    ipsa adipisci molestiae dolorem, soluta quae. Commodi
                    nostrum error tenetur quo harum, eligendi culpa minima
                    impedit temporibus provident, totam, vero ipsam?
                  </span>
                  <span>
                    Laboriosam eaque aliquid sed inventore mollitia provident
                    cum eos, maiores autem assumenda amet iure unde quae
                    doloremque ducimus recusandae dicta fugit nostrum
                    dignissimos placeat nam reiciendis adipisci quibusdam
                    deleniti. Vero!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}

export default index;
