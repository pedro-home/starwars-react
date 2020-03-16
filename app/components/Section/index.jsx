import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Component = ({ name, children, onRef }) => {
  let props;
  if (onRef) {
    props = { ...props, ref: onRef };
  }

  return (
    <section className={classnames('section', name)} {...props}>
      {children}
    </section>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  onRef: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Component;
