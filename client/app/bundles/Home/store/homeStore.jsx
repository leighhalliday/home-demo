import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk'

import homeReducer from '../reducers/homeReducer';

const configureStore = (railsProps) => (
  createStore(
    combineReducers({
      home: homeReducer,
      routing: routerReducer
    }),
    railsProps,
    applyMiddleware(thunk)
  )
);

export default configureStore;
