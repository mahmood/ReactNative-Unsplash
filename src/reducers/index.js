import { combineReducers } from 'redux';
import PhotoReducer from './photoReducer';
import ProfileReducer from './profileReducer';

export default combineReducers({
    home: PhotoReducer,
    profile: ProfileReducer
});