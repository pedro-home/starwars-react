import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ text }) => {
  return (
    <h4 className="quote">
      <q>{text}</q>
    </h4>
  );
};

Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Component;
