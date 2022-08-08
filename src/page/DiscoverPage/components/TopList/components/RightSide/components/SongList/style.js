import styled from 'styled-components';

export const SongListWrapper = styled.div`
  margin: 0 40px 40px 40px;
  .title {
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    .list {
      font-size: 20px;
      float: left;
      margin-bottom: 0;
      line-height: 28px;
    }
    .song {
      float: left;
      margin: 9px 0 0 20px;
      color: #666666;
    }
    .play_count {
      float: right;
      margin-top: 11px;
      color: #666666;
    }
  }
  .table_list {
    width: 100%;
    border: 1px solid #d9d9d9;
    th {
      height: 38px;
      background-color: #f7f7f7;
      background-position: 0 0;
      background-repeat: repeat-x;
      text-align: left;
    }
    .index {
      width: 77px;
    }
    .title1 {
    }
    .time {
      width: 91px;
    }
    .singer {
      width: 26%;
    }
    .wp {
      box-sizing: content-box;
      background-position: 0 -56px;
      padding: 8px 10px;
      height: 18px;
      line-height: 18px;
      color: #666666 !important;
      font-weight: normal;
    }
    .song_item {
    }
  }
`;
