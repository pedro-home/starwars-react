import React, { useContext } from 'react';
import Search from 'containers/Search';
import ContainerCenter from 'components/ContainerCenter';
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
      <ContainerCenter>
        <img className="logo" src={logo} />
        <Search />
      </ContainerCenter>
    </section>
  );
};

export default Section;
