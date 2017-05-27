import {
  FETCH_PHOTO,
  REFRESH_PHOTO
 } from '../actions/actionTypes';

const initialState = {refreshing: false};

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_PHOTO :
      return {...state, photos: action.data };
    case REFRESH_PHOTO:
      return {...state, photos:action.data , refreshing: action.refreshing }; 
    default:
      return state;
  }
}
