import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, resetCharacters } from 'providers/StarWars/actions';
import Search from 'components/Search';

const Container = ({ fetch, reset }) => {
  return <Search fetch={fetch} reset={reset} />;
};

function mapDispatchToProps(dispatch) {
  return {
    fetch: filter => dispatch(fetchCharacters(filter)),
    reset: () => dispatch(resetCharacters()),
  };
}

export default connect(null, mapDispatchToProps)(Container);
