import React, { ReactElement } from 'react';

import Link from 'next/link';
import AnimatedLayout from '../components/Layout/AnimatedLayout';
import { NextPage } from 'next';

import { motion } from 'framer-motion';

import strings from '../constants/strings';

import PageSection from '../components/Layout/PageSection';
import PopularDestinationsGrid from '../components/PopularDestinationsGrid';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

class IndexPage extends React.Component<NextPage> {
  render(): ReactElement {
    return (
      <AnimatedLayout>
        <div className="row">
          <div className="col">
            <PageSection title={strings.popularDestinationsAbroad}>
              <PopularDestinationsGrid />
            </PageSection>
            <PageSection title={strings.travelIdeasBulgaria}>
              <div className="row mb-5">
                <div className="col-md-3">
                  <motion.div variants={postVariants}>
                    <Link href="bulgaria/test">
                      <div className="card white-card-elevated elevation-4 border-0">
                        <img
                          src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-md-3">
                  <motion.div variants={postVariants}>
                    <motion.div
                      whileHover="hover"
                      variants={{ hover: { scale: 1.01 } }}
                    >
                      <div className="card white-card-elevated elevation-4 border-0">
                        <img
                          src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-md-3">
                  <motion.div variants={postVariants}>
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
                  </motion.div>
                </div>
                <div className="col-md-3">
                  <motion.div variants={postVariants}>
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
                  </motion.div>
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
            <div className="d-none d-lg-block index-intro-box white-card-elevated text-muted small elevation-5 pt-3 px-4 mb-5">
              <h6>Добре дошъл!</h6>
              <p>
                <b>Travl.bg</b> е сайт за пътешественици. Вдъхнови се за
                следващото си пътуване като разгледаш нашия каталог от градове и
                забележителности.
              </p>
            </div>
            <div className="white-card-elevated py-3 px-4 elevation-5 mb-5">
              <h5 className="mb-4">Топ пътешественици</h5>
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
              <div className="d-flex mb-3">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="/images/avatars/user-profile-female-unsplash.jpg"
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
                        Ивана Боянова{' '}
                        <b className="float-right text-primary d-none">1</b>
                      </a>
                    </Link>
                  </h6>
                  <p className="small p-0 mb-2 text-muted">
                    12 държави &middot; 243 пътеписа
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="/images/avatars/user-profile-male-unsplash.jpg"
                        alt=""
                        className="rounded-circle"
                        width="50px"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">
                    <Link href="/profile">
                      <a className="text-dark">
                        Петко Атанасов{' '}
                        <b className="float-right text-primary d-none">1</b>
                      </a>
                    </Link>
                  </h6>
                  <p className="small p-0 mb-2 text-muted">
                    8 държави &middot; 3 пътеписа
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </AnimatedLayout>
    );
  }
}

export default IndexPage;
