import React from 'react';
import Page from 'components/Page';
import Hero from './Hero';
import Results from './Results';

const Component = () => {
  return (
    <Page name="home">
      <Hero />
      <Results />
    </Page>
  );
};

export default Component;
