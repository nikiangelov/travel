import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

function index(): ReactElement {
  const router = useRouter();
  console.log('%crouter', 'background-color:green; color: white;', router);
  return <div>map</div>;
}

export default index;
