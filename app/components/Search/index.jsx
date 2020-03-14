import React, { useState } from 'react';
import { Input, InputGroup, Icon } from 'rsuite';

const Component = ({ onClick }) => {
  const [value, setValue] = useState('');
  return (
    <InputGroup inside>
      <Input
        placeholder="Search databank..."
        onChange={value => {
          setValue(value);
        }}
      />
      <InputGroup.Button onClick={event => onClick(event, value)}>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>
  );
};

export default Component;
