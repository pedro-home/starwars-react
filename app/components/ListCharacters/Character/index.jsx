import React from 'react';
import { Panel, List } from 'rsuite';
import Info from './Info';

const Component = ({ data, imageUrl }) => {
  return (
    <Panel shaded bordered bodyFill>
      <img src={imageUrl} height="240" />
      <Panel>
        <List>
          {Object.entries(data).map((key, value) => (
            <List.Item key={key}>
              <Info type={key} value={value} />
            </List.Item>
          ))}
        </List>
      </Panel>
    </Panel>
  );
};

export default Component;
