import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ children }) => {
  return <div className="container-center">{children}</div>;
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Component;
