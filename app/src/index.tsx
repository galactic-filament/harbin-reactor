import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Hello from './containers/Hello';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const preloadedState: StoreState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
};
const store = createStore<StoreState>(enthusiasm, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
