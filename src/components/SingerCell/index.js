import React from 'react';
import { SingerCellWrapper } from './style';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SingerCell({ item = {} }) {
  return (
    <SingerCellWrapper>
      <Link title={item.name} className="item" to={'/user/home?id=' + item.id}>
        <img src={item.picUrl}></img>
        <div className="info">
          <h4>{item.name}</h4>
          <p title="找不到对应的入驻歌手接口" className="textellips">
            找不到对应的入驻歌手接口
          </p>
        </div>
      </Link>
    </SingerCellWrapper>
  );
}

SingerCell.propTypes = {
  item: PropTypes.object
};
