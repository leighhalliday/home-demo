import { LOAD_HOUSE } from '../constants/homeConstants';

const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_HOUSE:
      return {...state, house: action.house};
    default:
      return state;
  }
};

export default homeReducer;
