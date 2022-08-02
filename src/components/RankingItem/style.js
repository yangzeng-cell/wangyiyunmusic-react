import styled from 'styled-components';

export const RankingItemWrapper = styled.div`
  height: 100%;
  width: 100%;

  .top {
    margin-top: 20px;
    margin-left: 20px;
    height: 100px;
    .cover {
      position: relative;
      float: left;
      height: 80px;
      width: 80px;
      overflow: hidden;
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: -145px -57px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tit {
      float: left;
      margin: 6px 0 0 10px;
      width: 116px;
      h3 {
        font-weight: bold;
      }
      .btn {
        display: flex;
        .play {
          height: 22px;
          width: 22px;
          background-position: -267px -205px;
          margin-right: 10px;
          text-indent: -9999px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .add {
          height: 22px;
          width: 22px;
          background-position: -300px -205px;
          text-indent: -9999px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .bill_list {
    padding-left: 15px;
    width: 100%;
    margin-bottom: 0;
    li {
      display: flex;
      line-height: 32px;
      height: 32px;
      box-sizing: border-box;
      .index_num {
        display: inline-block;
        width: 35px;
        height: 32px;
        text-align: center;
        font-size: 16px;
      }
      &:nth-child(-n + 3) {
        color: #c10d0c;
      }
      .a_nor {
        display: block;
        flex: 1;
      }
      .open {
        width: 82px;
        margin-left: 6px;
        display: none;
        a {
          position: relative;
          top: 50%;
          margin-top: -8.5px;
          float: left;
          width: 17px;
          height: 17px;
          margin-right: 10px;
        }
        .play {
          background-position: -267px -268px;
        }
        .add {
          background-position: 1px -698px;
        }
        .save {
          background-position: -297px -268px;
        }
      }
    }
    .change {
      .show {
        display: block;
      }
    }
  }
`;
