import styled from 'styled-components';

export const CommentListWrapper = styled.div`
  margin: 40px;
  .comment_title {
    height: 33px;
    display: flex;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      margin-right: 20px;
    }
    span {
      line-height: 33px;
      color: #666;
    }
  }
  .recommend_comment {
    margin-top: 20px;
    h3 {
      font-weight: bold;
      height: 20px;
      font-size: 100%;
      border-bottom: 1px solid #cfcfcf;
      margin-bottom: 0;
      box-sizing: content-box;
    }
  }
  .comment_list {
    h3 {
      font-weight: bold;
      font-size: 100%;
      box-sizing: content-box;
      height: 20px;
      border-bottom: 1px solid #cfcfcf;
      margin-bottom: 0;
    }
  }
  .pag {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
`;
