import React from 'react';
import { CommentItemWrapper } from './style';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CommentItem({ item }) {
  return (
    <CommentItemWrapper>
      <img className="avatar" src={item.user.avatarUrl}></img>
      <div className="comment_info">
        <div className="cn">
          <Link
            className="addUnderLine"
            to={'/user/home?id=' + item.user.userId}
          >
            {item.user.nickname}
          </Link>
          <span className="content">:&nbsp;{item.content}</span>
        </div>
        <div className="down clearFix">
          <span className="time">{item.timeStr}</span>
          <div className="reply">
            <a href="#" className="addUnderLine a1">
              <span className="dit icon2"></span>
              <span
                style={{
                  display: item.likedCount == 0 ? 'none' : 'inline-block'
                }}
              >
                &nbsp;&nbsp;({item.likedCount})
              </span>
            </a>
            <a href="#" className="addUnderLine a2">
              回复
            </a>
          </div>
        </div>
      </div>
    </CommentItemWrapper>
  );
}

CommentItem.propTypes = {
  item: PropTypes.obj
};
