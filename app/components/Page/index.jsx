import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Component = ({ name, children }) => {
  return <div className={classnames('page', name)}>{children}</div>;
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Component;
