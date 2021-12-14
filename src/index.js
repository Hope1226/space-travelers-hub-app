import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import mainStore from './redux/configureStore';
import './assets/stylesheets/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
