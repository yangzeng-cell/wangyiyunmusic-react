import React from 'react';
import { SongListWrapper } from './style';
import PropTypes from 'prop-types';
import SongListItem from './comppnents/SongListItem';

export default function SongList({ topListInfo }) {
  return (
    <SongListWrapper>
      <div className="title">
        <h3 className="list">歌曲列表</h3>
        <span className="song">{topListInfo?.tracks?.length}首歌</span>
        <span className="play_count">
          播放:&nbsp;
          <span style={{ color: '#c20c0c', fontWeight: 'bold' }}>
            {topListInfo?.playCount}
          </span>
          次
        </span>
      </div>
      <table className="table_list">
        <thead>
          <tr className="tr1">
            <th className="index tablepg"></th>
            <th className="title1 tablepg">
              <div className="wp tablepg">标题</div>
            </th>
            <th className="time tablepg">
              <div className="wp tablepg">时长</div>
            </th>
            <th className="singer tablepg">
              <div className="wp tablepg">歌手</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(topListInfo).length > 0 &&
            topListInfo?.tracks.map((item, index) => {
              return (
                <SongListItem
                  className="song_item"
                  key={item.id}
                  item={item}
                  index={index}
                  trackIds={topListInfo.trackIds[index]}
                />
              );
            })}
        </tbody>
      </table>
    </SongListWrapper>
  );
}

SongList.propTypes = {
  topListInfo: PropTypes.object
};
