import { getRecommendBannerList } from '../../../service/recommend';
import * as recommendTypes from './constants';

const changeBannerAction = (res) => ({
  type: recommendTypes.GET_RECOMMEND_BANNER,
  topBanners: res.banners
});

const changeBannerIndexAction = (index) => ({
  type: recommendTypes.SET_CHANGE_INDEX,
  index
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
