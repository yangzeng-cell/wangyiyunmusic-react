import styled from 'styled-components';

export const SongListItemWrapper = styled.tr`
  td {
    padding: 6px 10px;
    line-height: 18px;
    text-align: left;
  }
  .hshow {
    display: none;
    width: 71px;
    .add {
      height: 13px;
      width: 13px;
      background-position: 0 -700px;
      &:hover {
        background-position: -22px -700px;
      }
    }
    .save {
      width: 20px;
      height: 16px;
      background-position: 0 -174px;
      margin-left: 2px;
      &:hover {
        background-position: -20px -174px;
      }
    }
    .share {
      width: 18px;
      height: 16px;
      background-position: 0 -195px;
      margin-left: 2px;
      &:hover {
        background-position: -20px -195px;
      }
    }
    .download {
      width: 18px;
      height: 16px;
      background-position: -81px -174px;
      margin-left: 2px;
      &:hover {
        background-position: -104px -174px;
      }
    }
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
      .up {
        padding-left: 8px;
        line-height: 17px;
        font-size: 10px;
        background-position: -74px -299px;
      }
      .down {
        padding-left: 8px;
        line-height: 17px;
        font-size: 10px;
        background-position: -74px -318px;
      }
    }
  }
  .title2 {
    display: flex !important;
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
  .show1 {
    display: block;
  }
`;
