import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import './index.css';

const loadableConfig = {
  fallback: <div>Loading...</div>,
};

const HomePage = loadable(() => import('src/pages/HomePage'), loadableConfig);
const RegisterPage = loadable(
  () => import('src/pages/RegisterPage'),
  loadableConfig,
);

function App() {
  return (
    <>
      <Helmet>
        <title>prove</title>
        <meta name="description" content="전시회를 비대면으로." />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/0tayCLosahuLdWB0_RB_BGt8jxx9RgyJMTliA4WlRcAM78ZgQG-4Ofe9PYUAwMOF_jE"
        />
      </Helmet>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </>
  );
}

export default App;
