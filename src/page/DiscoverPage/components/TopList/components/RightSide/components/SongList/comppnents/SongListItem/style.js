import styled from 'styled-components';

export const SongListItemWrapper = styled.tr`
  td {
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
  }
  .hd {
    .num {
      float: left;
      width: 25px;
      text-align: center;
      color: #999;
    }
    .rank {
      float: right;
      width: 31px;
      text-align: center;
      .new {
        display: inline-block;
        width: 16px;
        height: 17px;
        margin: 0 auto;
        background-position: -67px -283px;
      }
    }
  }
  .title2 {
    display: flex;
    align-items: center;
    .img {
      margin-right: 14px;
    }

    .left_icon {
      background-position: 0 -103px;
      width: 17px;
      height: 17px;
      margin-right: 8px;
      &:hover {
        background-position: 0 -128px;
      }
    }
    .links {
      position: relative;
      flex: 1;
      height: 20px;
      line-height: 20px;
      width: 190px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 25px;
      .mv {
        position: absolute;
        text-indent: -999px;
        width: 23px;
        height: 17px;
        background-position: 0 -151px;
        right: 0;
        top: 3px;
      }
    }
  }
  .show {
    display: inline-block;
  }
  .hidden {
    display: none !important;
  }
`;
