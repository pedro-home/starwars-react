import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.less';
import configureStore from './store';
import Main from './components/Main';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
