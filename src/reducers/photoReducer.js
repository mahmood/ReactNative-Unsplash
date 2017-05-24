import {
  FETCH_PHOTO,
 } from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_PHOTO :
      return {...state, photos: action.data };
    default:
      return state;
  }
}
