import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from './discover/recommend/';
import { reducer as topListReducer } from './discover/toplist';

const totalReducer = combineReducers({
  recommend: recommendReducer,
  toplist: topListReducer
});

export default totalReducer;
