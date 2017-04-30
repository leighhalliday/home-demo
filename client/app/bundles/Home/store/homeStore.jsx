import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homeReducer from '../reducers/homeReducer';

const configureStore = (railsProps) => (
  createStore(
    combineReducers({
      home: homeReducer,
      routing: routerReducer
    }),
    railsProps
  )
);

export default configureStore;
