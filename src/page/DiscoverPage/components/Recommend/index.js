import React, { memo, useEffect } from 'react';
import BannerList from '../../../../components/BannerList';
import { RecommendWrapper } from './style';
import { getTopBannerActions } from '@/store/discover/recommend/actionCreators.js';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HotRecommend from './components/HotRecommend';
import NewDisk from './components/NewDisk';
import UpRankings from './components/UpRankings';
import { changeAlbumListAction } from '../../../../store/discover/recommend/actionCreators';
function Recommend() {
  const { topBanners, newAlbumList } = useSelector((state) => {
    return {
      topBanners: state.getIn(['recommend', 'topBanners']),
      newAlbumList: state.getIn(['recommend', 'newAlbumList'])
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerActions());
    dispatch(changeAlbumListAction());
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <BannerList topBanners={topBanners}></BannerList>
      <div className="g-bd1">
        <div className="g-mn1">
          <HotRecommend></HotRecommend>
          <NewDisk newAlbumList={newAlbumList}></NewDisk>
          <UpRankings></UpRankings>
        </div>
        <div className="g-sd1"></div>
      </div>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
