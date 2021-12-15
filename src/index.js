import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import mainStore from './redux/configureStore';
import './assets/stylesheets/index.css';
import App from './App';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
