import React, { useContext } from 'react';
import Search from 'containers/Search';
import Refs from 'contexts/Refs';
import logo from './assets/logo.png';

const Section = () => {
  const { setHero } = useContext(Refs);
  return (
    <section
      className="section hero"
      ref={elem => {
        setHero(elem);
      }}
    >
      <div className="center-container">
        <img className="logo" src={logo} />
        <Search />
      </div>
    </section>
  );
};

export default Section;
