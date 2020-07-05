/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet-async';

import Layout from 'src/components/layout';
import P1 from 'src/components/home/P1';
import P2 from 'src/components/home/P2';
import P3 from 'src/components/home/P3';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <Helmet>
        <title>prove</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <P1 />
      <P2 />
      <P3 />
    </Layout>
  );
};

export default HomePage;
