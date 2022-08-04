import React from 'react';
import { TopListItemWrapper } from './style';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function TopListItem({ item }) {
  return (
    <TopListItemWrapper>
      <Link className="avator" to={'?id=' + item.id}>
        <img className="img" src={item.coverImgUrl}></img>
        <div className="info">
          <p className="name textellips">{item.name}</p>
          <p>{item.updateFrequency}</p>
        </div>
      </Link>
    </TopListItemWrapper>
  );
}

TopListItem.propTypes = {
  item: PropTypes.object
};
