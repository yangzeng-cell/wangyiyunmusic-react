import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TopListItem from '../../../../../../components/TopListItem';
import { LeftSideWrapper } from './style';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { getTopDetailInfoAction } from '../../../../../../store/discover/toplist/actionCreator';
import PropTypes from 'prop-types';
export default function LeftSide({ getindex }) {
  let [searchParams] = useSearchParams();
  const [curIndex, setCurIndex] = useState(0);
  const dispatch = useDispatch();
  const { topList } = useSelector((state) => {
    return {
      topList: state.getIn(['recommend', 'topList'])
    };
  }, shallowEqual);
  useEffect(() => {
    if (!searchParams.get('id')) {
      dispatch(getTopDetailInfoAction(topList[0].id));
    }
  }, [topList]);

  return (
    <LeftSideWrapper>
      <h2 className="side_head">云音乐特色榜</h2>
      <ul className="music_ranking">
        {topList.slice(0, 4).map((item, index) => (
          <li
            className={curIndex === index ? 'active' : ''}
            onClick={() => {
              setCurIndex(index);
              getindex(index);
            }}
            key={item.id}
          >
            <TopListItem item={item}></TopListItem>
          </li>
        ))}
      </ul>
      <h2 className="side_head two">全球媒体榜</h2>
      <ul className="music_ranking">
        {topList.slice(4).map((item, index) => (
          <li
            className={curIndex === index * 1 + 4 ? 'active' : ''}
            key={item.id}
            onClick={() => {
              setCurIndex(index * 1 + 4);
              getindex(index * 1 + 4);
            }}
          >
            <TopListItem data-idx={index * 1 + 4} item={item}></TopListItem>
          </li>
        ))}
      </ul>
    </LeftSideWrapper>
  );
}

LeftSide.propTypes = {
  getindex: PropTypes.any
};
