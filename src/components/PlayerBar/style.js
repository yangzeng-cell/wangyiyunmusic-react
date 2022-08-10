import styled from 'styled-components';

export const PlayerBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat-x;
  width: 100%;
  z-index: 1000;
  .play {
    width: 980px;
    height: 53px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    > .btns {
      width: 137px;
      display: flex;
      align-items: center;
      a {
        display: block;
        width: 28px;
        height: 28px;
        text-indent: -999px;
        margin-top: 6px;
      }
      > .prev {
        background-position: 0 -130px;
      }
      > .play {
        background-position: 0 -204px;
        width: 36px;
        height: 36px;
      }
      > .next {
        background-position: -80px -130px;
      }
    }
  }
`;
