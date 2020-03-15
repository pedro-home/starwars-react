import React from 'react';
import { FlexboxGrid } from 'rsuite';

const Component = ({ type, value }) => {
  return (
    <FlexboxGrid justify="space-between" className="character-info">
      <FlexboxGrid.Item>
        <span className="character-info-type">{type}</span>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <span className="character-info-value">{value}</span>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Component;
