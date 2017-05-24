import { FETCH_PHOTO } from './actionTypes.js';
import axios from 'axios';

const clientId = 'bb09aa87e9f9340f1d5537f4f4c5649c1bd9c456d055b12fd76629cecceaa73a';
// const clientId = 'bbd9a8b273051e131270739a60032859d43abf7d44b4865cefae2d2c586487a0';

export function fetchPhoto() {
  return dispatch => {
    axios.get(`https://api.unsplash.com/photos/?page=1&per_page=9&client_id=${clientId}`)
      .then(response => {
        dispatch({type: FETCH_PHOTO, data: response.data});
        console.log(response.data);
      })
      .catch(error => {
        // dispatch({ type: FETCH_PHOTO_ERROR, error});
        console.log(error);
      });
  }
}

export default fuck = () => {
  return {type: 'sdsd', parent: 'sd'}
}