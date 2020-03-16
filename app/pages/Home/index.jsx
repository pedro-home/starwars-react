import React from 'react';

import Hero from './Hero';
import Results from './Results';

const Page = () => {
  return (
    <div data-page="home">
      <Hero />
      <Results />
    </div>
  );
};

export default Page;
