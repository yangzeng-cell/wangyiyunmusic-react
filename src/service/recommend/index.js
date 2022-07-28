import httpRequest from '../request';

export const getRecommendBannerList = (idx) => {
  return httpRequest.get(`banner?type=${idx}`);
};
