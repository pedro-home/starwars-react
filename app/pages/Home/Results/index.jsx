import React, { useContext } from 'react';
import Refs from 'contexts/Refs';
import ListCharacters from 'containers/ListCharacters';

const Section = () => {
  const { setResults } = useContext(Refs);
  return (
    <section
      className="section results"
      ref={elem => {
        setResults(elem);
      }}
    >
      <ListCharacters />
    </section>
  );
};

export default Section;
