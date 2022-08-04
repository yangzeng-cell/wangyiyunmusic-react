import styled from 'styled-components';

export const RankingInfoWrapper = styled.div`
  margin: 40px;
  display: flex;
  .u-cover {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    .cover {
      position: absolute;
      background-position: -230px -380px;
      width: 150px;
      height: 150px;
      top: 3px;
      left: 3px;
    }
  }
  .info {
    flex: 1;
    padding-left: 20px;
    .header {
      margin: 16px 0 4px;
      height: 24px;
      line-height: 24px;
      font-size: 20px;
    }
    .timer {
      margin-bottom: 20px;
      line-height: 35px;
      .icon {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
      }
      .update {
        margin-left: 5px;
      }
    }
    .btn_list {
      display: flex;
      .play {
        height: 31px;
        width: 66px;
        background-position: right -428px;
        color: #fff;

        i{
          display: inline-block;
          padding: 0 7px 0 8px;
          background-position: 0 -387px;
          height: 100%;
          width: 61px;
          font-style: normal;
          line-height: 31px;
          .icon{
            background-position:0 -1622px;
            display: inline-block;
            height: 18px;
            width: 20px;

      }
    }
  }
`;
