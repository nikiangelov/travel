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
    <div className="flex-1">
      <div className="pageContent d-flex flex-column">
        <Header />
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={imageVariants}>
            <div className="container-fluid py-3">{children}</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Layout;
