import styled from 'styled-components';

export const DjCellWrapper = styled.div`
  width: 100%;
  height: 100%;
  .dj {
    float: left;
    .img {
      width: 40px;
      height: 40px;
    }
  }
  .info {
    float: left;
    width: 160px;
    line-height: 21px;
    margin-left: 10px;
    .nickName {
      display: block;
      max-width: 88%;
    }
    p {
      color: #666;
    }
  }
`;
