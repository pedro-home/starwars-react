import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getErrorMessage, getData, isWaiting } from 'providers/StarWars/selectors';
import ListCharacters from 'components/ListCharacters';

const Container = ({ error, data, isLoading }) => {
  return <ListCharacters error={error} data={data} isLoading={isLoading} />;
};

const mapStateToProps = createStructuredSelector({
  error: getErrorMessage(),
  isLoading: isWaiting(),
  data: getData(),
});

export default connect(mapStateToProps)(Container);
