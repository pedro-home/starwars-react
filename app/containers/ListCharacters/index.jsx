import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getErrorMessage, getData, isWaiting, getNextFetch } from 'providers/StarWars/selectors';
import { fetchCharacters } from 'providers/StarWars/actions';
import ListCharacters from 'components/ListCharacters';

const Container = ({ error, data, isLoading, nextFetch, fetch }) => {
  return <ListCharacters error={error} data={data} isLoading={isLoading} nextFetch={nextFetch} fetch={fetch} />;
};

const mapStateToProps = createStructuredSelector({
  error: getErrorMessage(),
  isLoading: isWaiting(),
  data: getData(),
  nextFetch: getNextFetch(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: filter => dispatch(fetchCharacters(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
