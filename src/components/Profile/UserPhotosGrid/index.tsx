import React, { ReactElement, useState, useEffect } from 'react';
import { firebaseGetImages } from '../../../firebase/storage';
import ImagesGrid from '../ImagesGrid';

interface UserPhotosGridProps {
  path: string;
}
function UserPhotosGrid({ path }: UserPhotosGridProps): ReactElement {
  const [userPhotos, setUserPhotos] = useState();
  useEffect(() => {
    setTimeout(() => {
      firebaseGetImages(path).then(imgs => {
        setUserPhotos(imgs);
      });
    }, 200);
  }, [path]);

  return <ImagesGrid images={userPhotos} />;
}
export default UserPhotosGrid;
