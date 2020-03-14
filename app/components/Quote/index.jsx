import React from 'react';

const Component = ({ text, author }) => {
  return (
    <div className="quote">
      <h4 className="quote-text">
        <q>{text}</q>
      </h4>
      <p className="quote-author">{`- ${author}`}</p>
    </div>
  );
};

export default Component;
