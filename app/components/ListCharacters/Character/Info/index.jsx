import React from 'react';
import { FlexboxGrid } from 'rsuite';
import PropTypes from 'prop-types';

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

Component.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Component;
