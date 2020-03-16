import React from 'react';
import { Panel, List } from 'rsuite';
import PropTypes from 'prop-types';
import Info from './Info';
import Title from './Title';

const Component = ({ data, imageUrl }) => {
  return (
    <Panel shaded bodyFill className="character">
      {imageUrl && <img src={imageUrl} className="character-image" />}
      <List>
        {Object.entries(data).map(([key, value]) => (
          <List.Item key={key} className="character-entry">
            {key === 'name' ? <Title text={value} /> : <Info type={key} value={value} />}
          </List.Item>
        ))}
      </List>
    </Panel>
  );
};

Component.propTypes = {
  data: PropTypes.object.isRequired,
  imageUrl: PropTypes.string,
};

export default Component;
