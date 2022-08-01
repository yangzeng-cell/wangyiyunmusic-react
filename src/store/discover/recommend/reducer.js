/* eslint-disable indent */
import { Map } from 'immutable';
import * as recommendTypes from './constants';

const defaultState = Map({
  topBanners: [],
  index: 0,
  catList: {},
  recommendList: [],
  previousIndex: 0,
  currentIndex: 0,
  newAlbumList: [],
  topList: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case recommendTypes.GET_RECOMMEND_BANNER:
      return state.set('topBanners', action.topBanners);
    case recommendTypes.SET_CHANGE_INDEX:
      return state.set('index', action.index);
    case recommendTypes.GET_PLAYLIST_CATLIST:
      return state.set('catList', action.catList);
    case recommendTypes.GET_RECOMMEND_LIST:
      return state.set('recommendList', action.recommendList);
    case recommendTypes.PREVIOUS_INDEX:
      return state.set('previousIndex', action.previousIndex);
    case recommendTypes.CURRENT_INDEX:
      return state.set('currentIndex', action.currentIndex);
    case recommendTypes.NEW_ALBUM_LIST:
      return state.set('newAlbumList', action.newAlbumList);
    case recommendTypes.ALL_TOP_LIST:
      return state.set('topList', action.topList);
    default:
      return state;
  }
}

export default reducer;
