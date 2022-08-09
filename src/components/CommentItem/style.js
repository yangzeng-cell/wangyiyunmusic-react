import styled from 'styled-components';

export const CommentItemWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .comment_info {
    flex: 1;
    width: 100%;
    overflow: hidden;
    /* 用来断开文字 */
    word-break: break-word;
    .cn {
      .addUnderLine {
        display: inline-block;
        margin-right: 5px;
        color: #0c73c2;
      }
      .content {
        /* 对/n进行处理，遇到/n就会进行换行 也可以使用正则进行替换 */
        white-space: pre-line;
      }
    }
    .down {
      margin-top: 15px;
      color: #999;
      .time {
        float: left;
      }
      .reply {
        display: flex;
        float: right;
        .a1 {
          display: flex;
          align-items: center;
          padding-right: 8px;
          position: relative;
          &::after {
            position: absolute;
            content: '';
            height: 12px;
            width: 1px;
            background: #ccc;
            top: 3px;
            right: 0;
          }
          &:hover {
            .dit {
              background-position: -150px -20px;
            }
          }
          .dit {
            width: 15px;
            height: 14px;
            background-position: -150px 0;
          }
        }
        .a2 {
          margin-left: 8px;
        }
      }
    }
  }
`;
