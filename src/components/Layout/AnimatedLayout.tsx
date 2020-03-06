import React, { ReactNode } from 'react';
import AsideNavigation from '../AsideNavigation';
import Header from '../Header';
import { motion } from 'framer-motion';

const easing = [0.175, 0.85, 0.42, 0.96];
const imageVariants = {
  exit: { y: 70, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

interface Props {
  children?: ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props) => (
  <div className="asideNavWrap d-flex flex-row">
    <AsideNavigation />
    <div className="flex-1 mx-lg-3">
      <div className=" main-page-wrap d-flex flex-column">
        <Header />
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={imageVariants}>
            <div className="container-fluid py-3">{children}</div>
          </motion.div>
        </motion.div>
        <footer>
          <div className="mt-5" />
          <div className="mt-6 pt-3">
            <hr />
            <p className="small text-black-50 text-center py-3">
              Моля, при използването на сайта, имайте предвид, че този сайт е с
              учебна цел и все още е в процес на разработка.
              <br />
              Не гарантираме за правилната информация и безпроблемна
              функционалност на сайта.
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default Layout;
