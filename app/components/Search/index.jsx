import React, { useState, useContext } from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import Refs from 'contexts/Refs';

const Component = ({ fetch, reset }) => {
  const [value, setValue] = useState('');
  const { results } = useContext(Refs);

  return (
    <InputGroup inside>
      <Input
        placeholder="Search databank..."
        onChange={value => {
          setValue(value);
        }}
      />
      <InputGroup.Button
        onClick={() => {
          reset();

          if (results) {
            window.scrollTo({
              top: results.offsetTop,
              behavior: 'smooth',
            });

            fetch({ search: value });
          }
        }}
      >
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>
  );
};

export default Component;
