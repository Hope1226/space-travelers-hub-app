import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MissionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  missions: MissionsReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
