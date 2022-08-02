import React from 'react';
import PropTypes from 'prop-types';
import { DjCellWrapper } from './style';
import { Link } from 'react-router-dom';
export default function DjCell({ item }) {
  return (
    <DjCellWrapper>
      <Link className="dj" to={'/user/home?id=' + item.id}>
        <img className="img" src={item.avatarUrl}></img>
      </Link>
      <div className="info">
        <Link className="nickName textellips" to={'/user/home?id=' + item.id}>
          {item.nickName}
        </Link>
        <p className="textellips">不知道这个接口对不对不知道这个接口对不对dd</p>
      </div>
    </DjCellWrapper>
  );
}

DjCell.propTypes = {
  item: PropTypes.object
};
