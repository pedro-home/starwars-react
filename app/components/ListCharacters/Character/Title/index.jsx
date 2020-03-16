import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ text }) => {
  return <h6 className="title">{text}</h6>;
};

Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Component;
