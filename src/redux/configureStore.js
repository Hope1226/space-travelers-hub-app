import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';

const rocketsReducer = combineReducers({
  rocketReducer,
});

const mainStore = createStore(
  rocketsReducer,
  applyMiddleware(thunk, logger),
);

export default mainStore;
