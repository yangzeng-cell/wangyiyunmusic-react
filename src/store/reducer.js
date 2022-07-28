import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from './discover/recommend/';

const totalReducer = combineReducers({
  recommend: recommendReducer
});

export default totalReducer;
