import React, { ReactElement } from 'react';

// import Link from 'next/link';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import { NextPage } from 'next';

import PageSection from '../../components/Layout/PageSection';
import TravelLogHorizontalList from '../../components/TravelLogs/TravelLogHorizontalList';
// import PopularTravelLogsList from '../../components/TravelLogs/PopularTravelLogsList';

class AbroadPage extends React.Component<NextPage> {
  render(): ReactElement {
    return (
      <AnimatedLayout>
        <div className="row">
          <aside className="col-lg-3">
            <div className="white-card-elevated py-3 px-4 elevation-5 mb-5 sticky-top">
              <h5 className="mb-4">Филтрирай</h5>
              <hr />
              <div className="mb-3">
                <h6 className="mb-2">Регион</h6>
                <div>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Софийско
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Пловдивско
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Стара Планина
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Родопи
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Южно черноморие
                  </span>
                </div>
              </div>
              <hr />
              <div className="mb-3">
                <h6 className="mb-2">Подходящо за сезон</h6>
                <div>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Пролет
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Лято
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Есен
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Зима
                  </span>
                </div>
              </div>
              <hr />
              <div className="mb-3">
                <h6 className="mb-2">Продължителност</h6>
                <div>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    1 ден
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    2 дни
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    3 дни
                  </span>
                  <span className="btn btn-sm btn-outline-primary mb-2 mr-2">
                    Седмица
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <button className="btn flex-fill text-dark btn-light mt-2 ">
                  <i className="fas fa-random mr-2"></i>
                  Случаен пътепис
                </button>
              </div>
            </div>
          </aside>
          <div className="col">
            <PageSection
              title="Пътеписи от **Чужбина**"
              titleRightComponent={(): ReactElement => (
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-info dropdown-toggle"
                    type="button"
                  >
                    Сортирай&nbsp;&nbsp;
                  </button>
                </div>
              )}
            >
              <TravelLogHorizontalList data={[]} />
            </PageSection>
          </div>
        </div>
      </AnimatedLayout>
    );
  }
}

export default AbroadPage;
