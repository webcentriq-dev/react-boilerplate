import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers/App/App';
import './index.css';
import registerServiceWorker from './helpers/registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
