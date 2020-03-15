import React from 'react';
import { Panel, List } from 'rsuite';
import Info from './Info';

const Component = ({ data, imageUrl }) => {
  return (
    <Panel shaded bodyFill className="character">
      <img src={imageUrl} className="character-image" />
      <List>
        {Object.entries(data).map(([key, value]) => (
          <List.Item key={key} className="character-entry">
            {key === 'name' ? <h6>{value}</h6> : <Info type={key} value={value} />}
          </List.Item>
        ))}
      </List>
    </Panel>
  );
};

export default Component;
