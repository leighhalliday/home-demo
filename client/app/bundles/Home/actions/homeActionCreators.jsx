/* eslint-disable import/prefer-default-export */

import axios from 'axios';

import {
  LOAD_HOUSE,
  LOAD_FEATURED_HOUSES,
  SEARCH_HOUSES
} from '../constants/homeConstants';

export const loadHouse = (id) => {
  return (dispatch) => {
    dispatch({type: LOAD_HOUSE, house: null});

    axios.get(`/houses/${id}`, {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    }).then((response) => {
      dispatch({
        type: LOAD_HOUSE,
        house: response.data
      });
    });
  }
}

export const featuredHouses = () => {
  return (dispatch) => {
    axios.get(`/houses/featured`, {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    }).then((response) => {
      dispatch({
        type: LOAD_FEATURED_HOUSES,
        houses: response.data
      });
    });
  }
}
