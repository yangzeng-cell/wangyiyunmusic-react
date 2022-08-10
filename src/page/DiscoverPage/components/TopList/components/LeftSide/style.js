import styled from 'styled-components';

export const LeftSideWrapper = styled.div`
  width: 240px;
  padding-top: 40px;
  .side_head {
    font-size: 14px;
    font-weight: bold;
    padding: 0 10px 12px 15px;
    color: #000;
    margin-bottom: 0;
  }
  .two {
    margin-top: 20px;
  }
  .music_ranking {
    li {
      padding: 10px 0 10px 20px;
      height: 42px;
      cursor: pointer;
      box-sizing: content-box;
      &:hover {
        background-color: #f4f2f2;
      }
    }
  }
  .global_ranking {
  }
  .active {
    background-color: #e6e6e6;
    &:hover {
      background-color: #e6e6e6 !important;
    }
  }
`;
