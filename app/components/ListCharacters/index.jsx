import React from 'react';
import { FlexboxGrid, Loader } from 'rsuite';
import Quote from 'components/Quote';
import Character from './Character';

const Component = ({ error, data, isLoading }) => {
  let component = <Loader />;
  if (!isLoading) {
    if (data.length === 0) {
      component = <Quote text="Search your feelings, you know you to be true" author="Darth Vader" />;
    } else {
      component = (
        <FlexboxGrid>
          {data.map(value => (
            <FlexboxGrid.Item key={value.name} colspan={6}>
              <Character data={value} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
      );
    }
  }

  return component;
};

Component.defaultProps = {
  data: [],
};

export default Component;
