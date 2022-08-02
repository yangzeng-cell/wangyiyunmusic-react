import styled from 'styled-components';

export const SingerCellWrapper = styled.div`
  width: 100%;
  height: 100%;
  .item {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    img {
      width: 62px;
      height: 100%;
    }
    .info {
      width: 133px;
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      box-sizing: content-box;
      border-left: none;
      h4 {
        font-weight: bold;
        margin-top: 8px;
      }
      p {
        width: 90%;
      }
    }
  }
`;
