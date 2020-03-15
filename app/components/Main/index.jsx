import React, { useState } from 'react';
import { Container, Content } from 'rsuite';
import Home from 'pages/Home';
import Refs from 'contexts/Refs';
import { DEFAULT_REFS } from 'contexts/Refs/constants';

const Component = () => {
  const [results, setResults] = useState(DEFAULT_REFS.results);
  const [hero, setHero] = useState(DEFAULT_REFS.hero);

  return (
    <main className="main">
      <Refs.Provider value={{ hero, setHero, results, setResults }}>
        <Container>
          <Content>
            <Home />
          </Content>
        </Container>
      </Refs.Provider>
    </main>
  );
};

export default Component;
