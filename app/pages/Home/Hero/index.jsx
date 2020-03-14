import React from 'react';
import { FlexboxGrid, Col } from 'rsuite';
import Search from 'containers/Search';
import logo from './assets/logo.png';

const Section = () => {
  return (
    <section className="hero">
      <div className="center-container">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item componentClass={Col} md={12}>
            <img className="logo" src={logo} />
            <Search />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </section>
  );
};

export default Section;
