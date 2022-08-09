import React, { useRef } from 'react';
import { SongListItemWrapper } from './style';
import PropTypes from 'prop-types';
import formatterDate from '../../../../../../../../../../utils/formatterDate';
import { Link } from 'react-router-dom';
export default function SongListItem({ item, index, trackIds }) {
  const timerRef = useRef();
  const showRef = useRef();
  const transfer = (data) => {
    data = data.join(' ');
    return data;
  };
  const goIn = () => {
    showRef.current.style.display = 'flex';
    timerRef.current.style.display = 'none';
  };
  const goOut = () => {
    showRef.current.style.display = 'none';
    timerRef.current.style.display = 'block';
  };
  const concatName = (item) => {
    const arr = item.map((i) => {
      return i.name;
    });
    return arr.join('/');
  };
  return (
    <SongListItemWrapper
      style={{ background: index % 2 === 0 ? '#f7f7f7' : '' }}
      onMouseOver={() => goIn()}
      onMouseOut={() => goOut()}
    >
      <td className="hd">
        <span className="num">{index + 1}</span>
        <span className="rank">
          <span
            className={'icon new ' + (trackIds.lr ? 'hidden' : 'show')}
          ></span>
          <span
            className={
              'icon ' +
              (trackIds.lr ? 'show' : 'hidden') +
              (trackIds.lr && trackIds.lr - index > 0 ? ' up' : '') +
              (trackIds.lr && trackIds.lr - index < 0 ? ' down' : '')
            }
          >
            {trackIds.lr && trackIds.lr - index >= 0
              ? trackIds.lr - index
              : -(trackIds.lr - index)}
          </span>
        </span>
      </td>
      <td className="title2">
        <img
          className={'img ' + (index < 3 ? 'show' : 'hidden')}
          src={item.al.picUrl + '?param=50y50&quality=100'}
        ></img>
        <span className="left_icon tablepg"></span>
        <div className="links">
          <Link className="addUnderLine" to={'/song?=' + item.id}>
            {item.name}
          </Link>

          {item?.al.tns.length > 0 && ' - (' + transfer(item.al.tns) + ')'}
          <span
            className={'mv' + ' tablepg' + (item.mv != 0 ? ' show' : ' hidden')}
            title="播放MV"
          >
            MV
          </span>
        </div>
      </td>
      <td>
        <div ref={timerRef}>{formatterDate(item.dt, 'min')}</div>
        <div ref={showRef} className="hshow">
          <a className="add icon" title="添加到播放列表" href="#"></a>
          <a className="save tablepg" title="收藏" href="#"></a>
          <a className="share tablepg" href="#" title="分享"></a>
          <a className="download tablepg" href="#" title="下载"></a>
        </div>
      </td>
      <td>
        <Link className="addUnderLine" to={'/song?=' + item.id}>
          {concatName(item.ar)}
        </Link>
      </td>
    </SongListItemWrapper>
  );
}

SongListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  trackIds: PropTypes.object
};
