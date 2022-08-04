/* eslint-disable indent */
import { Map } from 'immutable';
import * as TopListTypes from './constants';

const defaultState = Map({
  topListInfo: {}
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case TopListTypes.GET_TOP_LIST_INFO:
      return state.set('topListInfo', action.topListInfo);
    default:
      return state;
  }
}

export default reducer;
