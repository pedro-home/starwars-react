import React, { useContext } from 'react';
import Refs from 'contexts/Refs';
import Section from 'components/Section';
import ListCharacters from 'containers/ListCharacters';

const Component = () => {
  const { setResults } = useContext(Refs);
  return (
    <Section
      name="results"
      onRef={elem => {
        setResults(elem);
      }}
    >
      <ListCharacters />
    </Section>
  );
};

export default Component;
