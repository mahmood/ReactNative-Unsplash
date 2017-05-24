import {FETCH_PROFILE, UNMOUNT_PROFILE} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {...state, profile: action.profile};
    case UNMOUNT_PROFILE:
      return {...state, profile: null};
    default: 
      return state;
  }
};