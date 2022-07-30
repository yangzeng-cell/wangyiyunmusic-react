import styled from 'styled-components';

export const RecommendItemWrapper = styled.div`
  width: 140px;
  height: 204px;
  position: relative;
  .pic {
    display: block;
    width: 140px;
    height: 140px;
  }
  .msk {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(${require('@/assets/images/coverall.png')}) no-repeat 0 0;
  }
  .bottom {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 27px;
    width: 100%;
    background: url(${require('@/assets/images/coverall.png')}) no-repeat 0 -537px;
    color: #ccc;
    padding-left: 10px;
    line-height: 27px;
    .icon_headset {
      display: inline-block;
      position: relative;
      top: 1px;
      background: url(${require('@/assets/images/iconall.png')}) no-repeat 0 -24px;
      width: 14px;
      height: 11px;
    }
    .counter {
      margin-left: 7px;
    }
    .player {
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 16px;
      height: 17px;
      background: url(${require('@/assets/images/iconall.png')}) no-repeat 0 0;
      &:hover {
        background-position: 0 -60px;
      }
    }
  }
  .desc {
    color: #000;
    font-size: 14px;
    display: block;
    margin: 8px 0 3px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
