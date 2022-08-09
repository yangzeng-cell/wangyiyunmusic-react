import {
  getCommentPlaylistAPI,
  getRecommendCommentListAPI
} from '../../../service/rankings';
import { getPlayListDetailAPI } from '../../../service/recommend';
import * as TopListTypes from './constants';

const getTopDetailInfo = (res) => ({
  type: TopListTypes.GET_TOP_LIST_INFO,
  topListInfo: res.playlist
});

const getCommentPlaylistInfo = (res) => ({
  type: TopListTypes.GET_COMMENT_PLAYLIST,
  commentPlaylist: res
});

const getRecommendCommentList = (res) => ({
  type: TopListTypes.GET_RECOMMEND_COMMENT_LIST,
  recommendCommentList: res
});

export const getRecommendCommentListAction = (
  id,
  type,
  sortType,
  pageSize = 15
) => {
  return async (dispatch) => {
    const res = await getRecommendCommentListAPI(id, type, sortType, pageSize);
    dispatch(getRecommendCommentList(res.data));
  };
};
// 歌单评论
export const getCommentPlaylistInfoAction = (id, offset = 0) => {
  return async (dispatch) => {
    const res = await getCommentPlaylistAPI(id, offset);
    dispatch(getCommentPlaylistInfo(res));
  };
};

export const getTopDetailInfoAction = (idx) => {
  return async (dispatch) => {
    const res = await getPlayListDetailAPI(idx);
    dispatch(getTopDetailInfo(res));
  };
};
