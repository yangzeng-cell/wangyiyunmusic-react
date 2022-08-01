import httpRequest from '../request';
// 轮播图接口
export const getRecommendBannerList = (idx) => {
  return httpRequest.get(`banner?type=${idx}`);
};
// 获取歌单分类接口 /playlist/catlist
export const getPlayListAPI = () => {
  return httpRequest.get('/playlist/catlist');
};

// 获取推荐歌单
export const getRecommendListAPI = () => {
  return httpRequest.get('/personalized');
};

// 新碟上架
export const getNewAlbumListAPI = (offset, limit) => {
  return httpRequest.get(
    `/top/album?offset=${offset}&limit=${limit}&year=2022&month=7`
  );
};

// 所有榜单
export const getTopListAPI = () => {
  return httpRequest.get('/toplist');
};
// 获取榜单详情接口
export const getPlayListDetailAPI = (idx) => {
  return httpRequest.get(`/playlist/detail?id=${idx}`);
};
