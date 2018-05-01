import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createLogger} from 'redux-logger';
import { createStore , applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import { searchRobots, requestRobots } from './reducers'
//import Card from './Card';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//import { robots } from './robots';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider  store={store}>
  <App/>
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
