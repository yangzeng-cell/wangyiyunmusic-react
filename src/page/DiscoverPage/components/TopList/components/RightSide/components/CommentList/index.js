import React, { useEffect } from 'react';
import { CommentListWrapper } from './style';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  getCommentPlaylistInfoAction,
  getRecommendCommentListAction
} from '../../../../../../../../store/discover/toplist/actionCreator';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import CommentItem from '../../../../../../../../components/CommentItem';
import Pegination from '../../../../../../../../components/Pagination';

export default function CommentList({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentPlaylistInfoAction(id));
    dispatch(getRecommendCommentListAction(id, 2, 2));
  }, [id]);
  const { commentPlaylist, recommendCommentList } = useSelector((state) => {
    return {
      commentPlaylist: state.getIn(['toplist', 'commentPlaylist']),
      recommendCommentList: state.getIn(['toplist', 'recommendCommentList'])
    };
  }, shallowEqual);
  const onChange = (page, pageSize) => {
    console.log(page, pageSize, 'page, pageSize');
    dispatch(getCommentPlaylistInfoAction(id, (page - 1) * pageSize));
  };
  return (
    <CommentListWrapper>
      <div className="comment_title">
        <h3>评论</h3>
        <span>共{commentPlaylist?.total}条评论</span>
      </div>
      <from></from>
      <div className="recommend_comment">
        <h3>精彩评论</h3>
        {recommendCommentList?.comments?.map((item) => (
          <CommentItem key={item.commentId} item={item}></CommentItem>
        ))}
      </div>
      <div className="comment_list">
        <h3>最新评论</h3>
        {commentPlaylist?.comments?.map((item) => {
          return <CommentItem key={item.commentId} item={item}></CommentItem>;
        })}
      </div>
      <div className="pag">
        <Pegination
          total={commentPlaylist?.total}
          pageSize={20}
          onChange={onChange}
        ></Pegination>
      </div>
    </CommentListWrapper>
  );
}

CommentList.propTypes = {
  id: PropTypes.any
};
