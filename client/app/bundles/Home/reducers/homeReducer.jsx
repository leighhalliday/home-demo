import { combineReducers } from 'redux';
// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const name = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const homeReducer = combineReducers({ name });

export default homeReducer;
