import React from 'react';
import { FlexboxGrid } from 'rsuite';

const Component = ({ type, value }) => {
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item>
        <span>{type}</span>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <span>{value}</span>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Component;
