import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import offersReducer from './src/reducers/offers';
import './src/scss/styles.scss';

const store = createStore(
  offersReducer
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
