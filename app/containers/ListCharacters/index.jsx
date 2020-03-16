import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getErrorMessage, getData, isWaiting, getNextFetch } from 'providers/StarWars/selectors';
import { fetchCharacters } from 'providers/StarWars/actions';
import ListCharacters from 'components/ListCharacters';

const Container = ({ error, data, isLoading, nextFetch, fetch }) => {
  return <ListCharacters error={error} data={data} isLoading={isLoading} nextFetch={nextFetch} fetch={fetch} />;
};

Container.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  nextFetch: PropTypes.object.isRequired,
  fetch: PropTypes.func.isRequired,
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
