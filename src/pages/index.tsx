import React, { ReactElement } from 'react';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { NextPage } from 'next';

import strings from '../constants/strings';

import PageSection from '../components/Layout/PageSection';
import PopularDestinationsGrid from '../components/PopularDestinationsGrid';

class IndexPage extends React.Component<NextPage> {
  render(): ReactElement {
    return (
      <Layout>
        <div className="row">
          <div className="col">
            <PageSection title={strings.popularDestinationsAbroad}>
              <PopularDestinationsGrid />
            </PageSection>
            <PageSection title={strings.travelIdeasBulgaria}>
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="card white-card-elevated elevation-4 border-0">
                    <img
                      src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card white-card-elevated elevation-4 border-0">
                    <img
                      src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card white-card-elevated elevation-4 border-0">
                    <img
                      src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card white-card-elevated elevation-4 border-0">
                    <img
                      src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </PageSection>
            <hr />
            <h1 className="font-weight-bold">Hello Next.js 👋</h1>
            <p>
              <Link href="/about">
                <a>About</a>
              </Link>
            </p>
            <br />
            <br />
            <br />
            <hr />
            <br />
            asd
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1582470836357-9a0afe8db224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
          <aside className="col-lg-3">
            <div className="white-card-elevated elevation-2 p-3 mb-4">hi</div>
            sidebar
          </aside>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
