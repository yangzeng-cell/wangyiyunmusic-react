import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { HotRecommendWrapper } from './style';
import TopHeader from 'components/TopHeader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRecommendListAction } from '../../../../../../store/discover/recommend/actionCreators';
import { shallowEqual } from 'react-redux';
import RecommendItem from '../../../../../../components/RecommendItem';

function HotRecommend() {
  const { recommendList } = useSelector((state) => {
    return {
      recommendList: state.getIn(['recommend', 'recommendList'])
    };
  }, shallowEqual);
  const [useList, setUseList] = useState(recommendList.slice(0, 8));
  const dispatch = useDispatch();
  const [moreHref] = useState('/discover/playlist');
  const [topTitle] = useState('热门推荐');
  const [tabList] = useState([
    {
      id: 1,
      name: '华语',
      url: '#'
    },
    {
      id: 2,
      name: '流行',
      url: '#'
    },
    {
      id: 3,
      name: '民谣',
      url: '#'
    },
    {
      id: 4,
      name: '摇滚',
      url: '#'
    },
    {
      id: 5,
      name: '电子',
      url: '#'
    }
  ]);
  useEffect(() => {
    dispatch(getRecommendListAction());
  }, [dispatch]);
  useEffect(() => {
    setUseList(recommendList.slice(0, 8));
  }, [recommendList]);
  console.log(useList);
  return (
    <HotRecommendWrapper>
      <TopHeader
        topTitle={topTitle}
        tabList={tabList}
        moreHref={moreHref}
      ></TopHeader>
      <ul className="recommend_list">
        {useList.map((item) => {
          return (
            <li key={item.id}>
              <RecommendItem item={item}></RecommendItem>
            </li>
          );
        })}
      </ul>
    </HotRecommendWrapper>
  );
}

HotRecommend.propTypes = {};

export default HotRecommend;
