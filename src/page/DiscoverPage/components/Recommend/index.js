import React, { memo, useEffect } from 'react';
import BannerList from '../../../../components/BannerList';
import { RecommendWrapper } from './style';
import { getTopBannerActions } from '@/store/discover/recommend/actionCreators.js';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HotRecommend from './components/HotRecommend';
import NewDisk from './components/NewDisk';
import UpRankings from './components/UpRankings';
import {
  changeAlbumListAction,
  changeTopListAction
} from '../../../../store/discover/recommend/actionCreators';
import RankingItem from '../../../../components/RankingItem';
function Recommend() {
  const { topBanners, newAlbumList, topList } = useSelector((state) => {
    return {
      topBanners: state.getIn(['recommend', 'topBanners']),
      newAlbumList: state.getIn(['recommend', 'newAlbumList']),
      topList: state.getIn(['recommend', 'topList'])
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerActions());
    dispatch(changeAlbumListAction());
    dispatch(changeTopListAction);
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
        <div className="g-sd1">
          <RankingItem rankingList={topList[0]}></RankingItem>
          <RankingItem rankingList={topList[1]}></RankingItem>
          <RankingItem rankingList={topList[2]}></RankingItem>
        </div>
      </div>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
