import React, { useEffect, useState } from 'react';
import { RankingInfoWrapper } from './style';
import PropTypes from 'prop-types';
import formatterDate from '../../../../../../../../utils/formatterDate';
export default function RankingInfo({ topListInfo, updateFrequency = 0 }) {
  console.log(topListInfo, '-----------');
  const [update, setUpdate] = useState(formatterDate(new Date()));
  useEffect(() => {
    setUpdate(formatterDate(new Date(topListInfo.updateTime)));
  }, [topListInfo]);
  return (
    <RankingInfoWrapper>
      <div className="u-cover">
        <img
          className="img"
          src={topListInfo?.coverImgUrl + '?param=150y150'}
        />
        <div className="cover coverall"></div>
      </div>
      <div className="info">
        <div className="header">{topListInfo?.name}</div>
        <div className="timer">
          <i className="icon1 icon"></i>
          <span className="update">最近更新：{update}&nbsp;&nbsp;&nbsp;</span>
          <span style={{ color: '#999' }}>({updateFrequency})</span>
        </div>
        <div className="btn_list">
          <a className="play button2" href="#">
            <i className="button2">
              <span className="icon button2"></span>
              播放
            </i>
          </a>
          <a className="add button2" href="#"></a>
          <a className="save button2" href="#">
            <i className="button2">({topListInfo?.subscribedCount})</i>
          </a>
          <a className="share button2" href="#">
            <i className="button2">({topListInfo?.shareCount})</i>
          </a>
          <a className="download button2" href="#">
            <i className="button2">下载</i>
          </a>
          <a className="comment button2" href="#">
            <i className="button2">({topListInfo?.commentCount})</i>
          </a>
        </div>
      </div>
    </RankingInfoWrapper>
  );
}

RankingInfo.propTypes = {
  topListInfo: PropTypes.object,
  updateFrequency: PropTypes.any
};
