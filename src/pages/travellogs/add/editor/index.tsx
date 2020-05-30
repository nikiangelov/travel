import * as React from 'react';
import AnimatedLayout from '../../../../components/Layout/AnimatedLayout';
import withApollo from '../../../../apollo/with-apollo';
import Editor from '../../../../components/Editor';
import Link from 'next/link';

const EditorPage: React.FunctionComponent = () => {
  return (
    <AnimatedLayout>
      <main className="main-layout-container">
        <div className="row justify-content-between">
          <div className="col-lg-9 pr-5">
            {/* Title */}
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
            </section>
            {/* Main content */}
            <MainEditor />
          </div>
          <div className="col-lg-3">
            {/* Author and meta info */}
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
            {/* Meta info */}
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
            {/* Guides */}
            <div className="white-card-elevated py-3 px-4 mb-4 elevation-2 sticky-top">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Включени обекти</h5>
              </div>
              <div className="aside-attraction-list"></div>
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
};
function MainEditor() {
  return (
    <div style={{ zIndex: 1100, position: 'relative' }}>
      <Editor />
    </div>
  );
}
export default withApollo(EditorPage);
