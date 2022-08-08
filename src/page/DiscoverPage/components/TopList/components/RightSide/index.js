/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RightSideWrapper } from './style';
import RankingInfo from './components/RankingInfo';
import { useDispatch } from 'react-redux';
import { getTopDetailInfoAction } from '../../../../../../store/discover/toplist/actionCreator';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SongList from './components/SongList';
export default function RightSide({ idx }) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    searchParams.get('id') &&
      dispatch(getTopDetailInfoAction(searchParams.get('id')));
  }, [dispatch, searchParams]);
  const { topListInfo } = useSelector((state) => {
    return {
      topListInfo: state.getIn(['toplist', 'topListInfo'])
    };
  });
  const { updateFrequency } = useSelector((state) => {
    return {
      updateFrequency: state.getIn(['recommend', 'topList'])[idx]
        ?.updateFrequency
    };
  });
  return (
    <RightSideWrapper>
      <RankingInfo
        updateFrequency={updateFrequency}
        topListInfo={topListInfo}
      ></RankingInfo>
      <SongList topListInfo={topListInfo}></SongList>
    </RightSideWrapper>
  );
}

RightSide.propTypes = {
  idx: PropTypes.number
};
