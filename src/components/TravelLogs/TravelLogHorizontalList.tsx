import React, { ReactNode } from 'react';
import TravelLogHorizontalListItem from './TravelLogHorizontalListItem';
import { motion } from 'framer-motion';
import { slideUpVariants } from '../../constants/animations';
import { Travellog } from '../../graphql/type-defs.graphqls';

interface PropTypes {
  data: Travellog[];
  children?: ReactNode;
}

const PopularTravelLogsList = ({ data }: PropTypes) => {
  return (
    <motion.div variants={slideUpVariants}>
      {data.map((item, i) => {
        if (!item) return null;
        const imageUrl =
          item.images && item.images.length ? item.images[0] : '';
        return (
          <div key={`travellog${i}`}>
            <TravelLogHorizontalListItem
              author={{
                firstName: item.author?.firstName,
                lastName: item.author?.lastName,
                avatar: item.author?.avatar,
              }}
              title={item.title || ''}
              descriptionShort={''}
              asPath={''}
              imageUrl={imageUrl || ''}
              href={''}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default PopularTravelLogsList;
