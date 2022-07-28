/* eslint-disable indent */
import { Map } from 'immutable';
import * as recommendTypes from './constants';

const defaultState = Map({
  topBanners: [],
  index: 0
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case recommendTypes.GET_RECOMMEND_BANNER:
      return state.set('topBanners', action.topBanners);
    case recommendTypes.SET_CHANGE_INDEX:
      return state.set('index', action.index);
    default:
      return state;
  }
}

export default reducer;
