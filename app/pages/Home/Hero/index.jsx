import React, { useContext } from 'react';
import Search from 'containers/Search';
import Section from 'components/Section';
import ContainerCenter from 'components/ContainerCenter';
import Refs from 'contexts/Refs';
import logo from './assets/logo.png';

const Component = () => {
  const { setHero } = useContext(Refs);
  return (
    <Section
      name="hero"
      onRef={elem => {
        setHero(elem);
      }}
    >
      <ContainerCenter>
        <img className="logo" src={logo} />
        <Search />
      </ContainerCenter>
    </Section>
  );
};

export default Component;
