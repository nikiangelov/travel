import React, { ReactElement } from 'react';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { NextPage } from 'next';

import PageSection from '../components/Layout/PageSection';
import strings from '../constants/strings';

class IndexPage extends React.Component<NextPage> {
  render(): ReactElement {
    return (
      <Layout>
        <div className="row">
          <div className="col">
            <PageSection title={strings.popularDestinationsAbroad}>
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="card white-card-elevated">
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
                  <div className="card">
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
                  <div className="card">
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
                  <div className="card">
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
            <PageSection title={strings.travelIdeasBulgaria}>data</PageSection>
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
              src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div>
              <img
                src="https://images.unsplash.com/photo-1582470836357-9a0afe8db224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
          <aside className="col-lg-3">
            <div className="white-card-elevated p-2 mb-4">hi</div>
            sidebar
          </aside>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
