import {
  getNewAlbumListAPI,
  getPlayListAPI,
  getPlayListDetailAPI,
  getRecommendBannerList,
  getRecommendListAPI,
  getTopListAPI
} from '../../../service/recommend';
import * as recommendTypes from './constants';

const changeBannerAction = (res) => ({
  type: recommendTypes.GET_RECOMMEND_BANNER,
  topBanners: res.banners
});

const changeBannerIndexAction = (index) => ({
  type: recommendTypes.SET_CHANGE_INDEX,
  index
});

const changePlaylistCatlistAction = (res) => ({
  type: recommendTypes.GET_PLAYLIST_CATLIST,
  catList: res
});

const changeRecommendList = (res) => ({
  type: recommendTypes.GET_RECOMMEND_LIST,
  recommendList: res
});

const changePreviousIndex = (index) => ({
  type: recommendTypes.PREVIOUS_INDEX,
  previousIndex: index
});

const changeCurrentIndex = (index) => ({
  type: recommendTypes.CURRENT_INDEX,
  currentIndex: index
});

const changeAlbumList = (newAlbumList) => ({
  type: recommendTypes.NEW_ALBUM_LIST,
  newAlbumList: newAlbumList
});

const changeTopList = (topList) => ({
  type: recommendTypes.ALL_TOP_LIST,
  topList: topList
});
// 获取榜单数据
const changePlayListDetail = (type, playList) => ({
  type,
  playList
});

export const getIndex = (index) => {
  return (dispatch) => {
    dispatch(changeBannerIndexAction(index));
  };
};

export const getTopBannerActions = () => {
  return (dispatch) => {
    getRecommendBannerList(0).then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

export const getPlaylistCatlistAction = () => {
  return async (dispatch) => {
    const res = await getPlayListAPI();
    dispatch(changePlaylistCatlistAction(res));
  };
};

export const getRecommendListAction = () => {
  return async (dispatch) => {
    const res = await getRecommendListAPI();
    dispatch(changeRecommendList(res.result));
  };
};

export const setPreviousIndexAction = (index) => {
  return (dispatch) => {
    dispatch(changePreviousIndex(index));
  };
};

export const setCurrentIndexAction = (index) => {
  return (dispatch) => {
    dispatch(changeCurrentIndex(index));
  };
};

export const changeAlbumListAction = (offset = 0, limit = 10) => {
  return async (dispatch) => {
    const res = await getNewAlbumListAPI(offset, limit);
    dispatch(changeAlbumList(res.monthData));
  };
};

export const changeTopListAction = () => {
  return async (dispatch) => {
    const res = await getTopListAPI();
    dispatch(changeTopList(res.list));
  };
};

// dispatch changePlayList 获取榜单数据

export const changePlayListDetailAction = (type, idx) => {
  return async (dispatch) => {
    const res = await getPlayListDetailAPI(idx);
    dispatch(changePlayListDetail(type, res.playlist.tracks));
  };
};
