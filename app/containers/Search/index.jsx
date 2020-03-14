import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from 'providers/StarWars/actions';
import Search from 'components/Search';

const Container = ({ fetchCharacters }) => {
  return <Search onClick={(_event, value) => fetchCharacters(value)} />;
};

function mapDispatchToProps(dispatch) {
  return {
    fetchCharacters: filter => dispatch(fetchCharacters(filter)),
  };
}

export default connect(null, mapDispatchToProps)(Container);
