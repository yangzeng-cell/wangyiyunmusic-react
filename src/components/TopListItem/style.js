import styled from 'styled-components';

export const TopListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  .avator {
    display: block;
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 2px;
    .img {
      width: 40px;
      height: 40px;
    }
    .info {
      flex: 1;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        line-height: 16px;
        color: #999999;
      }
      .name {
        width: 150px;
        color: #000000;
      }
    }
  }
  .active {
    background: #e6e6e6;
  }
`;
