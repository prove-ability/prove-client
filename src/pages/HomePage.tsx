/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import Layout from 'src/components/layout';
import P1 from 'src/components/home/P1';
import P2 from 'src/components/home/P2';
import P3 from 'src/components/home/P3';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <P1 />
      <P2 />
      <P3 />
    </Layout>
  );
};

export default HomePage;
