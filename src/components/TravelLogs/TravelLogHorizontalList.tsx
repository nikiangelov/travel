import React from 'react';
import TravelLogHorizontalListItem from './TravelLogHorizontalListItem';
import { popularTravelLogs } from '../../constants/dashboardData';
import { motion } from 'framer-motion';
import { slideUpVariants } from '../../constants/animations';

const PopularTravelLogsList: React.FC = () => {
  return (
    <motion.div variants={slideUpVariants}>
      {popularTravelLogs.map((item, i) => (
        <div key={`travellog${i}`}>
          <TravelLogHorizontalListItem
            title={item.title}
            descriptionShort={item.descriptionShort}
            asPath={item.asPath}
            imageUrl={item.imageUrl}
            href={item.href}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default PopularTravelLogsList;
