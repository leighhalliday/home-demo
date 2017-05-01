/* eslint-disable import/prefer-default-export */

import axios from 'axios';

import { LOAD_HOUSE } from '../constants/homeConstants';

export const loadHouse = (id) => {
  return (dispatch) => {
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
