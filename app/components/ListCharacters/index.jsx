import React, { useEffect } from 'react';
import { FlexboxGrid, Loader, Col } from 'rsuite';
import PropTypes from 'prop-types';
import Quote from 'components/Quote';
import ContainerCenter from 'components/ContainerCenter';
import Character from './Character';
import { getCharacterImage, hasEndedScroll } from './utils';

const Component = ({ error, data, isLoading, nextFetch, fetch }) => {
  useEffect(() => {
    if (!nextFetch) {
      return;
    }

    const handleScroll = () => {
      if (hasEndedScroll() && !isLoading) {
        fetch(nextFetch);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextFetch, fetch, isLoading]);

  let component = (
    <>
      <FlexboxGrid className="list-characters">
        {data.map(value => (
          <FlexboxGrid.Item componentClass={Col} md={6} sm={12} colspan={24} key={value.name}>
            <Character data={value} imageUrl={getCharacterImage(value.gender)} />
          </FlexboxGrid.Item>
        ))}
        {isLoading && (
          <FlexboxGrid.Item key="loader" componentClass={Col} colspan={24}>
            <Loader center content="loading..." />
          </FlexboxGrid.Item>
        )}
      </FlexboxGrid>
    </>
  );

  if (error !== '' || (data.length === 0 && !isLoading)) {
    component = (
      <ContainerCenter>
        <Quote text="Search your feelings, you know you to be true" />
      </ContainerCenter>
    );
  }

  return component;
};

Component.defaultProps = {
  data: [],
  isLoading: false,
  fetch: () => {},
  error: '',
};

Component.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  nextFetch: PropTypes.object,
  fetch: PropTypes.func,
};

export default Component;
