import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import getInitialStore from './common/InitialStore';
import rootReducer from './reducers';
import AppPacker from './containers/AppPacker';

const initialStore = getInitialStore();
const store = createStore(rootReducer, initialStore);
ReactDOM.render(
  <Provider store={store}>
    <AppPacker/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
