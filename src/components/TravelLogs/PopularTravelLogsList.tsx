import React from 'react';
import TravelLogListItem from './TravelLogListItem';
import { popularTravelLogs } from '../../constants/dashboardData';
import { motion } from 'framer-motion';
const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const PopularTravelLogsList: React.FC = () => {
  return (
    <motion.div variants={postVariants}>
      <div className="row">
        {popularTravelLogs.map((item, i) => (
          <div key={`travellog${i}`} className="col-md-3 d-flex mb-4">
            <TravelLogListItem
              title={item.title}
              descriptionShort={item.descriptionShort}
              asPath={item.asPath}
              imageUrl={item.imageUrl}
              href={item.href}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularTravelLogsList;
