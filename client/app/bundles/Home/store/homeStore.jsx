import { createStore } from 'redux';
import homeReducer from '../reducers/homeReducer';

const configureStore = (railsProps) => (
  createStore(homeReducer, railsProps)
);

export default configureStore;
