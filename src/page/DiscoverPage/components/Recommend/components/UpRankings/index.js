import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UpRankingsWrapper } from './style';
import TopHeader from '../../../../../../components/TopHeader';
import RankingItem from 'components/RankingItem';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as recommendTypes from '@/store/discover/recommend/constants';
import { changePlayListDetailAction } from '../../../../../../store/discover/recommend/actionCreators';
import { Link } from 'react-router-dom';
export default function UpRankings() {
  const [moreHref] = useState('/discover/toplist');
  const [topTitle] = useState('榜单');
  const { topList, upPlayList, newPlayList, originPlayList } = useSelector(
    (state) => {
      return {
        topList: state.getIn(['recommend', 'topList']),
        upPlayList: state.getIn(['recommend', 'upPlayList']),
        newPlayList: state.getIn(['recommend', 'newPlayList']),
        originPlayList: state.getIn(['recommend', 'originPlayList'])
      };
    },
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changePlayListDetailAction(
        recommendTypes.GET_UPPLAYLIST_DETAIL,
        topList[0]?.id
      )
    );
    dispatch(
      changePlayListDetailAction(
        recommendTypes.GET_NEWPLAYLIST_DETAIL,
        topList[1]?.id
      )
    );
    dispatch(
      changePlayListDetailAction(
        recommendTypes.GET_ORIGINPLAYLIST_DETAIL,
        topList[2]?.id
      )
    );
  }, [topList]);
  const component1 = (
    <div className="more">
      <Link
        className="addUnderLine"
        to={'/discover/toplist?id=' + topList[0]?.id}
      >
        {'查看全部>'}
      </Link>
    </div>
  );
  const component2 = (
    <div className="more">
      <Link
        className="addUnderLine"
        to={'/discover/toplist?id=' + topList[1]?.id}
      >
        {'查看全部>'}
      </Link>
    </div>
  );
  const component3 = (
    <div className="more">
      <Link
        className="addUnderLine"
        to={'/discover/toplist?id=' + topList[2]?.id}
      >
        {'查看全部>'}
      </Link>
    </div>
  );
  return (
    <UpRankingsWrapper>
      <TopHeader moreHref={moreHref} topTitle={topTitle}></TopHeader>
      <div className="ranking_list">
        <div className="bill">
          <RankingItem
            playList={upPlayList}
            topList={topList[0]}
            components={component1}
          ></RankingItem>
        </div>
        <div className="bill">
          <RankingItem
            playList={newPlayList}
            topList={topList[1]}
            components={component2}
          ></RankingItem>
        </div>
        <div className="bill">
          <RankingItem
            playList={originPlayList}
            topList={topList[2]}
            components={component3}
          ></RankingItem>
        </div>
      </div>
    </UpRankingsWrapper>
  );
}

UpRankings.propTypes = {
  topList: PropTypes.array
};
