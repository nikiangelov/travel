import * as React from 'react';
import Link from 'next/link';
import AnimatedLayout from '../components/Layout/AnimatedLayout';

const AboutPage: React.FunctionComponent = () => (
  <AnimatedLayout>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </AnimatedLayout>
);

export default AboutPage;
