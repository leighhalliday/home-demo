import {
  LOAD_HOUSE,
  LOAD_FEATURED_HOUSES
} from '../constants/homeConstants';

const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_HOUSE:
      return {...state, house: action.house};
    case LOAD_FEATURED_HOUSES:
      return {...state, houses: action.houses};
    default:
      return state;
  }
};

export default homeReducer;
