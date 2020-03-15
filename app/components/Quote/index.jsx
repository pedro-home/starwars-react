import React from 'react';

const Component = ({ text }) => {
  return (
    <h4 className="quote">
      <q>{text}</q>
    </h4>
  );
};

export default Component;
