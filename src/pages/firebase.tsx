import React from 'react';
import Link from 'next/link';
import AnimatedLayout from '../components/Layout/AnimatedLayout';

const FirebasePage: React.FunctionComponent = () => {
  return (
    <AnimatedLayout>
      <h1>Firebase Page</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </AnimatedLayout>
  );
};

export default FirebasePage;
