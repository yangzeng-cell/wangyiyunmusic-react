import React from 'react';
import { SongListItemWrapper } from './style';
import PropTypes from 'prop-types';
import formatterDate from '../../../../../../../../../../utils/formatterDate';
import { Link } from 'react-router-dom';
export default function SongListItem({ item, index, trackIds }) {
  const transfer = (data) => {
    data = data.join(' ');
    return data;
  };
  return (
    <SongListItemWrapper>
      <td className="hd">
        <span className="num">{index + 1}</span>
        <span className="rank">
          <span
            className={'icon new ' + (trackIds.lr ? 'hidden' : 'show')}
          ></span>
          <span className={'down ' + (trackIds.lr ? 'show' : 'hidden')}>
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
        <div>{formatterDate(item.dt, 'min')}</div>
      </td>
      <td>
        <Link className="addUnderLine" to={'/song?=' + item.id}>
          {item.ar[0].name}
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
