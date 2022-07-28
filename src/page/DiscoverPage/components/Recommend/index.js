import React, { memo, useEffect } from 'react';
import BannerList from '../../../../components/BannerList';
import { RecommendWrapper } from './style';
import { getTopBannerActions } from '@/store/discover/recommend/actionCreators.js';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
function Recommend() {
  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(['recommend', 'topBanners'])
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerActions());
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <BannerList topBanners={topBanners}></BannerList>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
