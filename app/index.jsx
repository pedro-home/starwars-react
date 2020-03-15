import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from 'components/Main';
import './index.less';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
