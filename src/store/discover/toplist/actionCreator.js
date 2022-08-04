import { getPlayListDetailAPI } from '../../../service/recommend';
import * as TopListTypes from './constants';

const getTopDetailInfo = (res) => ({
  type: TopListTypes.GET_TOP_LIST_INFO,
  topListInfo: res.playlist
});

export const getTopDetailInfoAction = (idx) => {
  return async (dispatch) => {
    const res = await getPlayListDetailAPI(idx);
    dispatch(getTopDetailInfo(res));
  };
};
