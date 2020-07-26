import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux'
import TokenRefresher from './components/TokenRefresher'
import store from './store'

import App from './App';
import './styles/main.scss';

ReactDOM.render(<Provider store={store}>
  <TokenRefresher />
  <App /></Provider>, document.getElementById('root'));