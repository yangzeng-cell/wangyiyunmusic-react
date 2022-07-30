import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { RecommendItemWrapper } from './style';
import { NavLink } from 'react-router-dom';
import translateCounter from '../../utils/translateCounter';
function RecommendItem({ item }) {
  console.log(item);
  return (
    <RecommendItemWrapper>
      <div style={{ width: '140px', height: '140px', position: 'relative' }}>
        <img className="pic" src={item.picUrl}></img>
        <a
          title={item.name}
          href={'/playlist?id=' + item.id}
          className="msk"
        ></a>
        <div className="bottom">
          <span className="icon_headset"></span>
          <span className="counter">{translateCounter(item.playCount)}</span>
          <a className="player" title="播放"></a>
        </div>
      </div>
      <p>
        <NavLink title={item.name} className={'desc'} to={'/dj?id=' + item.id}>
          {item.name}
        </NavLink>
      </p>
    </RecommendItemWrapper>
  );
}
RecommendItem.propTypes = {
  item: PropTypes.object
};
export default memo(RecommendItem);
