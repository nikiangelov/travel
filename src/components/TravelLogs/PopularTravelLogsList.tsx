import React from 'react';
import TravelLogListItem from './TravelLogListItem';
import { popularTravelLogs } from '../../constants/dashboardData';
import { motion } from 'framer-motion';
import { slideUpVariants } from '../../constants/animations';

const PopularTravelLogsList: React.FC = () => {
  return (
    <motion.div variants={slideUpVariants}>
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
