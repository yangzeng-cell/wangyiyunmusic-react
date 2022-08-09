/* eslint-disable indent */
import { Map } from 'immutable';
import * as TopListTypes from './constants';

const defaultState = Map({
  topListInfo: {},
  commentPlaylist: {},
  recommendCommentList: {}
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case TopListTypes.GET_TOP_LIST_INFO:
      return state.set('topListInfo', action.topListInfo);
    case TopListTypes.GET_COMMENT_PLAYLIST:
      return state.set('commentPlaylist', action.commentPlaylist);
    case TopListTypes.GET_RECOMMEND_COMMENT_LIST:
      return state.set('recommendCommentList', action.recommendCommentList);
    default:
      return state;
  }
}

export default reducer;
