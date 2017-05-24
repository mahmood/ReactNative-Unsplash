import {FETCH_PROFILE, UNMOUNT_PROFILE} from './actionTypes';
import axios from 'axios';

// const clientId = 'bb09aa87e9f9340f1d5537f4f4c5649c1bd9c456d055b12fd76629cecceaa73a';
const clientId = 'bbd9a8b273051e131270739a60032859d43abf7d44b4865cefae2d2c586487a0';

export function fetchProfile(username) {
  return dispatch => {
    axios.get(`https://api.unsplash.com/users/${username}?client_id=${clientId}`)
      .then(response => {
        dispatch({ type: FETCH_PROFILE, profile: response.data });
        console.log('from action', response.data);
      })
      .catch(error => {
        // dispatch({ type: FETCH_PHOTO_ERROR, error});
        console.log(error);
      });
  };
};

export function UnmountProfile(){
  return {
    type: UNMOUNT_PROFILE
  }
}